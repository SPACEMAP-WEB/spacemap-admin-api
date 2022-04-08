const { UnauthorizedException } = require('../common/exceptions')
const { verify } = require('./jwt')

const verifyToken = (req, _res, next) => {
  const access = req.cookies.accessToken
  if (!access) {
    throw new UnauthorizedException('Login first.')
  }
  const { verified, body } = verify(access, false)
  if (!verified) {
    throw new UnauthorizedException(body.name)
  }
  req.id = body.id
  req.name = body.name
  next()
}

const issueAccessToken = async (req, res) => {
  const { accessToken, refreshToken } = req.cookies
  if (!accessToken || !refreshToken) {
    throw new BadRequestException('Append both accessToken and refreshToken.')
  }

  const { verified: accessVerified } = verify(access, false)
  if (accessVerified) {
    throw new BadRequestException('Do not need to re-issue access token.')
  }

  const { verified: refreshVerified, body } = verify(refresh, true)
  if (!refreshVerified) {
    throw new BadRequestException('Login again.')
  }
  const { name } = body

  const adminInfoString = await fs.readFile('admin.informaition.json', 'utf-8')
  if (!adminInfoString) {
    throw new HttpException(500, 'Internal server error. (at : read admin info')
  }

  const realRefreshToken = JSON.parse(adminInfoString).refreshTokens[`${name}`]
  if (!realRefreshToken) {
    throw new HttpException(500, 'Internal server error. (at : read refresh token from json.')
  }
  if (realRefreshToken !== refreshToken) {
    throw new BadRequestException('Login again.')
  }
  
  const newAccessToken = sign({ id, name }, undefined, 0)
  res.cookie('accessToken', newAccessToken, { httpOnly: true })
}

module.exports = {
  verifyToken,
  issueAccessToken,
}