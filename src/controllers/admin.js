const { BadRequestException, UnauthorizedException } = require('../common/exceptions')
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

module.exports = {
  adminLoginControl, 
  adminLogoutControl,
}