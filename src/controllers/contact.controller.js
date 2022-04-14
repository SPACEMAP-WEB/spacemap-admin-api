/* eslint-disable no-unused-vars */
const ContactService = require('../services/contact.service');

exports.createModel = async (req, res, next) => {
  const model = await ContactService.createModel(req.body);
  return {
    data: model,
    message: 'Succesfully Model Created',
  };
};
exports.readModels = async (req, res, next) => {
  const models = await ContactService.readModel();
  return {
    data: models,
    message: 'Succesfully Models Retrieved',
  };
};

exports.readModel = async (req, res, next) => {
  const model = await ContactService.readModelByID(req.params.id);
  return {
    data: model,
    message: 'Succesfully Model Retrieved',
  };
};

exports.deleteModelByID = async (req, res, next) => {
  await ContactService.deleteModelByID(req.params.id);
  return {
    message: 'Succesfully Model Deleted',
  };
};
/* eslint-disable no-unused-vars */
