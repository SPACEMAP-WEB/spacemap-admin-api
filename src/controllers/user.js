const UserService = require("../services/user");

exports.createModel = async function (req, res, next) {
  try {
    let model = await UserService.create();
    return res.status(200).json({
      status: 200,
      data: model,
      message: "Succesfully Model Created",
    });
  } catch (err) {
    return res.status(400).json({ status: 400, message: err.message });
  }
};
exports.readModels = async function (req, res, next) {
  try {
    let models = await UserService.read();
    return res.status(200).json({
      status: 200,
      data: models,
      message: "Succesfully Models Retrieved",
    });
  } catch (err) {
    return res.status(400).json({ status: 400, message: err.message });
  }
};

exports.readModel = async function (req, res, next) {
  try {
    let model = await UserService.readByID(req.params.id);
    return res.status(200).json({
      status: 200,
      data: model,
      message: "Succesfully Model Retrieved",
    });
  } catch (err) {
    return res.status(400).json({ status: 400, message: err.message });
  }
};

exports.updateModel = async function (req, res, next) {
  try {
    let model = await UserService.update(req.params.id);
    return res.status(200).json({
      status: 200,
      data: model,
      message: "Succesfully Model Retrieved",
    });
  } catch (err) {
    return res.status(400).json({ status: 400, message: err.message });
  }
};

exports.updateModel = async function (req, res, next) {
  try {
    let model = await UserService.delete(req.params.id);
    return res.status(200).json({
      status: 200,
      data: model,
      message: "Succesfully Model Retrieved",
    });
  } catch (err) {
    return res.status(400).json({ status: 400, message: err.message });
  }
};
