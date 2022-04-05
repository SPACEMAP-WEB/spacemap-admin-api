const TemplateService = require("../services/template");

exports.createModel = async function (req, res, next) {
  let model = await TemplateService.create();
  return {
    data: model,
    message: "Succesfully Model Created",
  };
};
exports.readModels = async function (req, res, next) {
  let models = await TemplateService.read();
  return {
    data: models,
    message: "Succesfully Models Retrieved",
  };
};

exports.readModel = async function (req, res, next) {
  let model = await TemplateService.readByID(req.params.id);
  return {
    data: model,
    message: "Succesfully Model Retrieved",
  };
};

exports.updateModel = async function (req, res, next) {
  let model = await TemplateService.update(req.params.id);
  return {
    data: model,
    message: "Succesfully Model Updated",
  };
};

exports.deleteModel = async function (req, res, next) {
  await TemplateService.delete(req.params.id);
  return {
    message: "Succesfully Model Deleted",
  };
};
