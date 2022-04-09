const UserService = require('../services/user.service');

exports.createModel = async (req, res, next) => {
  const model = await UserService.create(req.body);
  return {
    data: model,
    message: 'Succesfully Model Created',
  };
};
exports.readModels = async (req, res, next) => {
  const models = await UserService.read();
  return {
    data: models,
    message: 'Succesfully Models Retrieved',
  };
};


exports.readModel = async (req, res, next) => {
  console.log(req.params.id);
  const model = await UserService.readByID(req.params.id);
  return {
    data: model,
    message: 'Succesfully Model Retrieved',
  };
};

exports.updateModel = async (req, res, next) => {
  const model = await UserService.update(req.params.id, req.body);
  return {
    data: model,
    message: 'Succesfully Model Updated',
  };
};

exports.deleteModelbyID = async (req, res, next) => {
  await UserService.deleteByID(req.params.id);
  return {
    message: 'Succesfully Model Deleted',
  };
};
