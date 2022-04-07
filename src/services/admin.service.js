const { HttpException } = require('../common/exceptions')
const { sign } = require('../lib/jwt')
const fs = require('fs').promises

const checkAdminInfo = async (id, password) => {
  const adminInfoString = await fs.readFile('admin.information.json', 'utf-8')
  if (!adminInfoString) {
    throw new HttpException(500, 'Internal server error. (at : read admin info')
  }
  const adminInfoParsed = JSON.parse(adminInfoString)
  const { ADMIN_ID, ADMIN_PW } = adminInfoParsed
  if (!ADMIN_ID || !ADMIN_PW) {
    throw new HttpException(500, 'Internal server error. (at : read admin info)')
  }
  if (id !== ADMIN_ID && password !== ADMIN_PW) {
    throw new UnauthorizedException('Admin information does not matched.')
  }
  return adminInfoParsed
}

const writeAdminInfo = async (changedAdminInfo) => {
  const stringifiedAdminInfo = JSON.stringify(changedAdminInfo)
  return fs.writeFile('admin.information.json', stringifiedAdminInfo, 'utf-8')
}

const adminLoginService = async (id, password) => {
  let adminInfoParsed = await checkAdminInfo(id, password)

  const accessToken = sign({ id }, undefined, 0)
  const refreshToken = sign({ id }, undefined, 1)
  adminInfoParsed.refreshToken = refreshToken

  await writeAdminInfo(adminInfoParsed)
  return {
    accessToken,
    refreshToken,
  }
}

const changePasswordService = async (id, fromPassword, toPassword) => {
  let adminInfoParsed = await checkAdminInfo(id, fromPassword)
  adminInfoParsed.ADMIN_PW = toPassword
  await writeAdminInfo(adminInfoParsed)
}

module.exports = {
  adminLoginService,
  changePasswordService,
} 