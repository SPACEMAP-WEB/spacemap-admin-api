/* eslint-disable no-unused-vars */
const UserService = require('../services/user.service');

exports.createModel = async (req, res, next) => {
  const model = await UserService.createModel(req.body);
  return {
    data: model,
    message: 'Succesfully Model Created',
  };
};

exports.readModels = async (req, res, next) => {
  const models = await UserService.readModel();
  return {
    data: models,
    message: 'Succesfully Models Retrieved',
  };
};

exports.readModel = async (req, res, next) => {
  const model = await UserService.readModelByID(req.params.id);
  return {
    data: model,
    message: 'Succesfully Model Retrieved',
  };
};

exports.updateModelByID = async (req, res, next) => {
  const model = await UserService.updateModel(req.params.id, req.body);
  return {
    data: model,
    message: 'Succesfully Model Updated',
  };
};

exports.deleteModelByID = async (req, res, next) => {
  await UserService.deleteModelByID(req.params.id);
  return {
    message: 'Succesfully Model Deleted',
  };
};
/* eslint-disable no-unused-vars */
