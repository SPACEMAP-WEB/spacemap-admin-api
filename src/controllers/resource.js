const ResourceService = require("../services/resource");

exports.createModel = async function (req, res, next) {
  try {
    let resourceModel = await ResourceService.create(
      req.body.title,
      req.body.content,
      req.body.board_type
    );
    return res.status(200).json({
      status: 200,
      data: resourceModel,
      message: "Succesfully Model Created",
    });
  } catch (err) {
    return res.status(400).json({ status: 400, message: err.message });
  }
};
exports.readModels = async function (req, res, next) {
  try {
    let resourceModels = await ResourceService.read();
    return res.status(200).json({
      status: 200,
      data: resourceModels,
      message: "Succesfully Models Retrieved",
    });
  } catch (err) {
    return res.status(400).json({ status: 400, message: err.message });
  }
};

exports.readModel = async function (req, res, next) {
  try {
    let resourceModel = await ResourceService.readByID(req.params.id);
    return res.status(200).json({
      status: 200,
      data: resourceModel,
      message: "Succesfully Model Retrieved",
    });
  } catch (err) {
    return res.status(400).json({ status: 400, message: err.message });
  }
};

exports.updateModel = async function (req, res, next) {
  try {
    let resourceModel = await ResourceService.update(req.params.id);
    return res.status(200).json({
      status: 200,
      data: resourceModel,
      message: "Succesfully Model Updated",
    });
  } catch (err) {
    return res.status(400).json({ status: 400, message: err.message });
  }
};

exports.deleteModel = async function (req, res, next) {
  try {
    await ResourceService.delete(req.params.id);
    return res.status(200).json({
      status: 200,
      message: "Succesfully Model Deleted",
    });
  } catch (err) {
    return res.status(400).json({ status: 400, message: err.message });
  }
};
