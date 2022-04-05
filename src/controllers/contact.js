const ContactService = require("../services/contact");

exports.createModel = async function (req, res, next) {
  try {
    let model = await ContactService.create(
      req.body.name,
      req.body.email,
      req.body.subject,
      req.body.message
    );
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
    let models = await ContactService.read();
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
    let model = await ContactService.readByID(req.params.id);
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
    let model = await ContactService.update(req.params.id);
    return res.status(200).json({
      status: 200,
      data: model,
      message: "Succesfully Model Updated",
    });
  } catch (err) {
    return res.status(400).json({ status: 400, message: err.message });
  }
};

exports.deleteModel = async function (req, res, next) {
  try {
    await ContactService.delete(req.params.id);
    return res.status(200).json({
      status: 200,
      data: model,
      message: "Succesfully Model Deleted",
    });
  } catch (err) {
    return res.status(400).json({ status: 400, message: err.message });
  }
};
