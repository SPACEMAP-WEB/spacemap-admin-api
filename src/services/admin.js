const { HttpException } = require('../common/exceptions')
const { sign } = require('../lib/jwt')
const fs = require('fs').promises

const adminLoginService = async (id, password) => {
  const adminInfoString = await fs.readFile('admin.information.json', 'utf-8')
  if (!adminInfoString) {
    throw new HttpException(500, 'Internal server error. (at : read admin info')
  }
  let adminInfoParsed = JSON.parse(adminInfoString)

  const { ADMIN_ID, ADMIN_PW } = adminInfoParsed
  if (!ADMIN_ID || !ADMIN_PW) {
    throw new HttpException(500, 'Internal server error. (at : read admin info)')
  }
  if (id !== ADMIN_ID && password !== ADMIN_PW) {
    throw new UnauthorizedException('Login failed.')
  }

  const accessToken = sign({ id }, undefined, 0)
  const refreshToken = sign({ id }, undefined, 1)

  adminInfoParsed.refreshToken = refreshToken

  const adminInfo = JSON.stringify(adminInfoParsed)
  
  await fs.writeFile('admin.information.json', adminInfo, 'utf-8')
  return {
    accessToken,
    refreshToken,
  }
}

module.exports = {
  adminLoginService,
}