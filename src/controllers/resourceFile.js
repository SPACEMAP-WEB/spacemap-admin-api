const ResourceFileService = require("../services/resourceFile");

exports.createModel = async function (req, res, next) {
  let model = await ResourceFileService.create();
  return {
    data: model,
    message: "Succesfully Model Created",
  };
};
exports.readModels = async function (req, res, next) {
  let models = await ResourceFileService.read();
  return {
    data: models,
    message: "Succesfully Models Retrieved",
  };
};

exports.readModel = async function (req, res, next) {
  let model = await ResourceFileService.readByID(req.params.id);
  return {
    data: model,
    message: "Succesfully Model Retrieved",
  };
};

exports.updateModel = async function (req, res, next) {
  let model = await ResourceFileService.update(req.params.id);
  return {
    data: model,
    message: "Succesfully Model Updated",
  };
};

exports.deleteModel = async function (req, res, next) {
  await ResourceFileService.delete(req.params.id);
  return {
    message: "Succesfully Model Deleted",
  };
};
