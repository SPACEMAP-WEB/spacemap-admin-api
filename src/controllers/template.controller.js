const TemplateService = require('../services/template.service');

exports.createModel = async (req, res, next) => {
  const model = await TemplateService.create();
  return {
    data: model,
    message: 'Succesfully Model Created',
  };
};
exports.readModels = async (req, res, next) => {
  const models = await TemplateService.read();
  return {
    data: models,
    message: 'Succesfully Models Retrieved',
  };
};

exports.readModel = async (req, res, next) => {
  const model = await TemplateService.readByID(req.params.id);
  return {
    data: model,
    message: 'Succesfully Model Retrieved',
  };
};

exports.updateModel = async (req, res, next) => {
  const model = await TemplateService.update(req.params.id);
  return {
    data: model,
    message: 'Succesfully Model Updated',
  };
};

exports.deleteModelbyID = async (req, res, next) => {
  await TemplateService.deleteByID(req.params.id);
  return {
    message: 'Succesfully Model Deleted',
  };
};
