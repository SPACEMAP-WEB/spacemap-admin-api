/* eslint-disable no-unused-vars */
const TemplateService = require('../services/template.service');

exports.createModel = async (req, res, next) => {
  const model = await TemplateService.createModel(req.body);
  return {
    data: model,
    message: 'Succesfully Model Created',
  };
};
exports.readModels = async (req, res, next) => {
  const models = await TemplateService.readModel();
  return {
    data: models,
    message: 'Succesfully Models Retrieved',
  };
};

exports.readModel = async (req, res, next) => {
  const model = await TemplateService.readModelByID(req.params.id);
  return {
    data: model,
    message: 'Succesfully Model Retrieved',
  };
};

exports.updateModelByID = async (req, res, next) => {
  const model = await TemplateService.updateModel(req.params.id, req.body);
  return {
    data: model,
    message: 'Succesfully Model Updated',
  };
};

exports.deleteModelByID = async (req, res, next) => {
  await TemplateService.deleteModelByID(req.params.id);
  return {
    message: 'Succesfully Model Deleted',
  };
};
/* eslint-disable no-unused-vars */
