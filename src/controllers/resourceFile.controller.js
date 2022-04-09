/* eslint-disable no-unused-vars */
const ResourceFileService = require('../services/resourceFile.service');

exports.createModel = async (req, res, next) => {
  // console.log(req.body);
  // console.log(req.body);
  console.log(req.file);
  // console.log(req.files.file.location);
  const model = await ResourceFileService.create(req.body);
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

exports.readModelByID = async (req, res, next) => {
  const model = await ResourceFileService.readByID(req.params.id);
  return {
    data: model,
    message: 'Succesfully Model Retrieved',
  };
};

exports.updateModelByID = async (req, res, next) => {
  const model = await ResourceFileService.update(req.params.id);
  return {
    data: model,
    message: 'Succesfully Model Updated',
  };
};

exports.deleteModelByPlacesID = async (req, res, next) => {
  await ResourceFileService.deleteModelByPlacesID(req.params.id);
  return {
    message: 'Succesfully Model Deleted',
  };
};

exports.deleteModelByID = async (req, res, next) => {
  await ResourceFileService.deleteModelByID(req.params.id);
  return {
    message: 'Succesfully Model Deleted',
  };
};
/* eslint-disable no-unused-vars */
