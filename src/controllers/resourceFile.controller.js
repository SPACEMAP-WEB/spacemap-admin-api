const ResourceFileService = require('../services/resourceFile.service');

exports.createModel = async (req, res, next) => {
  const model = await ResourceFileService.create();
  return {
    data: model,
    message: 'Succesfully Model Created',
  };
};
exports.readModels = async (req, res, next) => {
  const models = await ResourceFileService.read();
  return {
    data: models,
    message: 'Succesfully Models Retrieved',
  };
};

exports.readModel = async (req, res, next) => {
  const model = await ResourceFileService.readByID(req.params.id);
  return {
    data: model,
    message: 'Succesfully Model Retrieved',
  };
};

exports.updateModel = async (req, res, next) => {
  const model = await ResourceFileService.update(req.params.id);
  return {
    data: model,
    message: 'Succesfully Model Updated',
  };
};

exports.deleteModelbyID = async (req, res, next) => {
  await ResourceFileService.deleteByID(req.params.id);
  return {
    message: 'Succesfully Model Deleted',
  };
};
