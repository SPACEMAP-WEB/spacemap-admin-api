const ResourceService = require("../services/resource");

exports.createModel = async function (req, res, next) {
  let model = await ResourceService.create();
  return {
    data: model,
    message: "Succesfully Model Created",
  };
};
exports.readModels = async function (req, res, next) {
  let models = await ResourceService.read();
  return {
    data: models,
    message: "Succesfully Models Retrieved",
  };
};

exports.readModel = async function (req, res, next) {
  let model = await ResourceService.readByID(req.params.id);
  return {
    data: model,
    message: "Succesfully Model Retrieved",
  };
};

exports.updateModel = async function (req, res, next) {
  let model = await ResourceService.update(req.params.id);
  return {
    data: model,
    message: "Succesfully Model Updated",
  };
};

exports.deleteModel = async function (req, res, next) {
  await ResourceService.delete(req.params.id);
  return {
    message: "Succesfully Model Deleted",
  };
};
