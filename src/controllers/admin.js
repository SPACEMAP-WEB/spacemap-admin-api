const { BadRequestException } = require('../common/exceptions')
const { adminLoginService } = require('../services/admin')

const adminLoginControl = async (req, res) => {
  const { id, password } = req.body
  if (!id || !password) {
    throw new BadRequestException('Wrong body info.')
  }
  const { accessToken, refreshToken } = await adminLoginService(id, password)
  res
    .cookie('accessToken', accessToken, { httpOnly: true })
    .cookie('refreshToken', refreshToken, { httpOnly: true })
  return {
    success: true,
    message: 'Login success.',
    data: {
      accessToken,
      refreshToken,
    }
  }
}

const adminLogoutControl = async (req, res) => {
  res
    .clearCookie('accessToken')
    .clearCookie('refreshToken')
  return {
    success: true,
    message: 'Logout success.',
  }
}

const changePasswordControl = async (req, res) => {
  return {

  }
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

  const adminInfoString = await fs.readFile('admin.informaition.json', 'utf-8')
  if (!adminInfoString) {
    throw new HttpException(500, 'Internal server error. (at : read admin info')
  }

  const realRefreshToken = JSON.parse(adminInfoString).refreshToken
  if (!realRefreshToken) {
    throw new HttpException(500, 'Internal server error. (at : read refresh token from json.')
  }
  if (realRefreshToken !== refreshToken) {
    throw new BadRequestException('Login again.')
  }
  
  const newAccessToken = sign({ id }, undefined, 0)

  res.cookie('accessToken', newAccessToken, { httpOnly: true })
}

module.exports = {
  adminLoginControl, 
  adminLogoutControl,
  changePasswordControl,
  issueAccessToken,
}