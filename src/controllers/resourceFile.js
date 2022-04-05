const ResourceFileService = require("../services/resourceFile");

exports.createModel = async function (req, res, next) {
  try {
    let resourceFileModel = await ResourceFileService.create(
      req.body.file_name,
      req.body.type,
      req.body.size,
      req.body.resource_ID,
      req.body.size
    );
    return res.status(200).json({
      status: 200,
      data: resourceFileModel,
      message: "Succesfully Model Created",
    });
  } catch (err) {
    return res.status(400).json({ status: 400, message: err.message });
  }
};
exports.readModels = async function (req, res, next) {
  try {
    let resourceFileModels = await ResourceFileService.read();
    return res.status(200).json({
      status: 200,
      data: resourceFileModels,
      message: "Succesfully Models Retrieved",
    });
  } catch (err) {
    return res.status(400).json({ status: 400, message: err.message });
  }
};

exports.readModel = async function (req, res, next) {
  try {
    let resourceFileModel = await ResourceFileService.readByID(req.params.id);
    return res.status(200).json({
      status: 200,
      data: resourceFileModel,
      message: "Succesfully Model Retrieved",
    });
  } catch (err) {
    return res.status(400).json({ status: 400, message: err.message });
  }
};

exports.updateModel = async function (req, res, next) {
  try {
    let resourceFileModel = await ResourceFileService.update(req.params.id);
    return res.status(200).json({
      status: 200,
      data: resourceFileModel,
      message: "Succesfully Model Updated",
    });
  } catch (err) {
    return res.status(400).json({ status: 400, message: err.message });
  }
};

exports.deleteModel = async function (req, res, next) {
  try {
    await ResourceFileService.delete(req.params.id);
    return res.status(200).json({
      status: 200,
      message: "Succesfully Model Deleted",
    });
  } catch (err) {
    return res.status(400).json({ status: 400, message: err.message });
  }
};
