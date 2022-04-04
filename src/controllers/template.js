const TemplateService = require("../services/template");

exports.createModel = async function (req, res, next) {
  try {
    let templateModel = await TemplateService.create();
    return res.status(200).json({
      status: 200,
      data: templateModel,
      message: "Succesfully Model Created",
    });
  } catch (err) {
    return res.status(400).json({ status: 400, message: err.message });
  }
};
exports.readModels = async function (req, res, next) {
  try {
    let templateModels = await TemplateService.read();
    return res.status(200).json({
      status: 200,
      data: templateModels,
      message: "Succesfully Models Retrieved",
    });
  } catch (err) {
    return res.status(400).json({ status: 400, message: err.message });
  }
};

exports.readModel = async function (req, res, next) {
  try {
    let templateModel = await TemplateService.readByID(req.params.id);
    return res.status(200).json({
      status: 200,
      data: templateModel,
      message: "Succesfully Model Retrieved",
    });
  } catch (err) {
    return res.status(400).json({ status: 400, message: err.message });
  }
};

exports.updateModel = async function (req, res, next) {
  try {
    let templateModel = await TemplateService.update(req.params.id);
    return res.status(200).json({
      status: 200,
      data: templateModel,
      message: "Succesfully Model Updated",
    });
  } catch (err) {
    return res.status(400).json({ status: 400, message: err.message });
  }
};

exports.deleteModel = async function (req, res, next) {
  try {
    await TemplateService.delete(req.params.id);
    return res.status(200).json({
      status: 200,
      message: "Succesfully Model Deleted",
    });
  } catch (err) {
    return res.status(400).json({ status: 400, message: err.message });
  }
};
