/* eslint-disable no-unused-vars */
const ResourceService = require('../services/resource.service');

exports.createModel = async (req, res, next) => {
  const model = await ResourceService.create(req.body);
  return {
    data: model,
    message: 'Succesfully Model Created',
  };
};
exports.readModels = async (req, res, next) => {
  const models = await ResourceService.read();
  return {
    data: models,
    message: 'Succesfully Models Retrieved',
  };
};

exports.readModel = async (req, res, next) => {
  const model = await ResourceService.readByID(req.params.id);
  return {
    data: model,
    message: 'Succesfully Model Retrieved',
  };
};

exports.updateModelByID = async (req, res, next) => {
  const model = await ResourceService.update(req.params.id);
  return {
    data: model,
    message: 'Succesfully Model Updated',
  };
};

exports.deleteModelByID = async (req, res, next) => {
  await ResourceService.deleteModelByID(req.params.id);
  return {
    message: 'Succesfully Model Deleted',
  };
};
/* eslint-disable no-unused-vars */
