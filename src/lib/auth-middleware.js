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
  next()
}

module.exports = verifyToken