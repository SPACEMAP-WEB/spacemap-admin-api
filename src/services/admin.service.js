const { HttpException } = require('../common/exceptions')
const { sign } = require('../lib/jwt')
const { Mutex } = require('async-mutex')
const fs = require('fs').promises

const mutex = new Mutex()

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

const adminLoginService = async (id, password, name) => {
  const release = await mutex.acquire()

  let adminInfoParsed = await checkAdminInfo(id, password)
  const accessToken = sign({ id, name }, undefined, 0)
  const refreshToken = sign({ id, name }, undefined, 1)
  adminInfoParsed.refreshTokens[`${name}`] = refreshToken
  await writeAdminInfo(adminInfoParsed)

  release()
  return {
    accessToken,
    refreshToken,
  }
}

const adminLogoutService = async (name) => {
  const release = await mutex.acquire()

  const adminInfoString = await fs.readFile('admin.information.json', 'utf-8')
  if (!adminInfoString) {
    throw new HttpException(500, 'Internal server error. (at : read admin info')
  }
  let adminInfoParsed = JSON.parse(adminInfoString)
  delete adminInfoParsed.refreshTokens[`${name}`]
  await writeAdminInfo(adminInfoParsed)

  release()
}

const changePasswordService = async (id, fromPassword, toPassword) => {
  const release = await mutex.acquire()

  let adminInfoParsed = await checkAdminInfo(id, fromPassword)
  adminInfoParsed.ADMIN_PW = toPassword
  await writeAdminInfo(adminInfoParsed)

  release()
}

module.exports = {
  adminLoginService,
  adminLogoutService,
  changePasswordService,
} 