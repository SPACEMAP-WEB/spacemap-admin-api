const UserService = require("../services/user");

exports.createModel = async function (req, res, next) {
  let model = await UserService.create();
  return {
    data: model,
    message: "Succesfully Model Created",
  };
};
exports.readModels = async function (req, res, next) {
  let models = await UserService.read();
  return {
    data: models,
    message: "Succesfully Models Retrieved",
  };
};

exports.readModel = async function (req, res, next) {
  let model = await UserService.readByID(req.params.id);
  return {
    data: model,
    message: "Succesfully Model Retrieved",
  };
};

exports.updateModel = async function (req, res, next) {
  let model = await UserService.update(req.params.id);
  return {
    data: model,
    message: "Succesfully Model Updated",
  };
};

exports.deleteModel = async function (req, res, next) {
  await UserService.delete(req.params.id);
  return {
    message: "Succesfully Model Deleted",
  };
};
