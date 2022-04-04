const ResourceService = require("../services/resourece");

exports.createModel = async function (req, res, next) {
  try {
    let resoureceModel = await ResourceService.create();
    return res.status(200).json({
      status: 200,
      data: resoureceModel,
      message: "Succesfully Model Created",
    });
  } catch (err) {
    return res.status(400).json({ status: 400, message: err.message });
  }
};
exports.readModels = async function (req, res, next) {
  try {
    let resoureceModels = await ResourceService.read();
    return res.status(200).json({
      status: 200,
      data: resoureceModels,
      message: "Succesfully Models Retrieved",
    });
  } catch (err) {
    return res.status(400).json({ status: 400, message: err.message });
  }
};

exports.readModel = async function (req, res, next) {
  try {
    let resoureceModel = await ResourceService.readByID(req.params.id);
    return res.status(200).json({
      status: 200,
      data: resoureceModel,
      message: "Succesfully Model Retrieved",
    });
  } catch (err) {
    return res.status(400).json({ status: 400, message: err.message });
  }
};

exports.updateModel = async function (req, res, next) {
  try {
    let resoureceModel = await ResourceService.update(req.params.id);
    return res.status(200).json({
      status: 200,
      data: resoureceModel,
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
