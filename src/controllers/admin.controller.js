const { BadRequestException, UnauthorizedException } = require('../common/exceptions')
const { adminLoginService, changePasswordService, adminLogoutService } = require('../services/admin.service')

const adminLoginControl = async (req, res) => {
  const { id, password, name } = req.body
  if (!id || !password || !name) {
    throw new BadRequestException('Wrong body info.')
  }
  const { accessToken, refreshToken } = await adminLoginService(id, password, name)
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
  const { name } = req
  if (!name) {
    throw new UnauthorizedException('Login first.')
  }
  await adminLogoutService(name)
  res
    .clearCookie('accessToken')
    .clearCookie('refreshToken')
  return {
    success: true,
    message: 'Logout success.',
  }
}

const changePasswordControl = async (req, res) => {
  const { id, fromPassword, toPassword } = req.body
  if (!id || !fromPassword || !toPassword) {
    throw new BadRequestException('Wrong body info.')
  }
  if (req.id !== id) {
    throw new UnauthorizedException('Login again.')
  }

  await changePasswordService(id, fromPassword, toPassword)
  return {
    success: true,
    message: 'Password has successfully changed.'
  }
}

module.exports = {
  adminLoginControl, 
  adminLogoutControl,
  changePasswordControl,
}