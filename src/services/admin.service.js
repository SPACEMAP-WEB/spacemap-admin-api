const { BadRequestException } = require('../common/exceptions')
const { sign, verify } = require('../lib/jwt')
const AdminModel = require('../models/admin.model')
const bcrypt = require('bcrypt')

const getAdminInfoService = async (id) => {
  const result = await AdminModel.findOne({ id, }).exec()
  if (!result) {
    throw new BadRequestException('Wrong admin info.')
  }
  return result
}

const adminLoginService = async (id, password, name) => {
  const result = await AdminModel.findOne({ id, }).exec()
  if (!result) {
    throw new BadRequestException('Wrong admin info.')
  }
  const passwordCompare = await bcrypt.compare(password, result.password)
  if (!passwordCompare) {
    throw new BadRequestException('Wrong admin info.')
  }
  const accesstoken = sign({ id, name }, undefined, 0)
  const refreshtoken = sign({ id, name }, undefined, 1)
  const index = result.refreshtokens.findIndex((element) => element.name === name)
  if (index >= 0) {
    result.refreshtokens[index].refreshtoken = refreshtoken
  } else {
    result.refreshtokens.push({ name, refreshtoken })
  }
  await result.save()
  return {
    accesstoken,
    refreshtoken,
  }
}

const adminLogoutService = async (id, name) => {
  const result = await AdminModel.findOne({ id, }).exec()
  if (!result) {
    throw new BadRequestException('Wrong admin info.')
  }
  const index = result.refreshtokens.findIndex((element) => element.name === name)
  if (index >= 0) {
    result.refreshtokens[index].refreshtoken = ""
  }
  await result.save()
}

const changePasswordService = async (id, fromPassword, toPassword) => {
  const result = await AdminModel.findOne({ id, }).exec()
  if (!result) {
    throw new BadRequestException('Wrong admin info.')
  }
  const passwordCompare = await bcrypt.compare(fromPassword, result.password)
  if (!passwordCompare) {
    throw new BadRequestException('Wrong admin info.')
  }
  result.password = await bcrypt.hash(toPassword ,10)
  await result.save()
}

const issueTokenService = async (accesstoken, refreshtoken) => {
  const { verified: accessVerified } = verify(accesstoken, false)
  if (accessVerified) {
    throw new BadRequestException('Do not need to re-issue access token.')
  }

  const { verified: refreshVerified, body } = verify(refreshtoken, true)
  if (!refreshVerified) {
    throw new BadRequestException('Login again.')
  }
  const { id, name } = body

  const result = await AdminModel.findOne({ id, }).exec()
  if (!result) {
    throw new BadRequestException('Wrong admin info.')
  }

  const index = result.refreshtokens.findIndex((element) => {
    if (!element.name || !element.refreshtoken)
      return false
    return (element.name === name) && (element.refreshtoken === refreshtoken)
  })
  if (index < 0) {
    throw new BadRequestException('Refresh token is dirty.')
  }
  const newAccessToken = sign({ id, name }, undefined, 0)
  return {
    newAccessToken,
  }
}

module.exports = {
  getAdminInfoService,
  adminLoginService,
  adminLogoutService,
  changePasswordService,
  issueTokenService,
} 