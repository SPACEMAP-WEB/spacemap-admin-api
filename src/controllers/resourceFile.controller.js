/* eslint-disable no-unused-vars */
const ResourceFileService = require('../services/resourceFile.service');

exports.createModel = async (req, res, next) => {
  const { placesID } = req.body;
  const originalName = req.file.originalname;
  const { location } = req.file;
  const resourceFileInfo = { placesID, originalName, location };
  const model = await ResourceFileService.createModel(resourceFileInfo);
  return {
    data: model,
    message: 'Succesfully Model Created',
  };
};
exports.readModels = async (req, res, next) => {
  const models = await ResourceFileService.readModels();
  return {
    data: models,
    message: 'Succesfully Models Retrieved',
  };
};

exports.readModelByID = async (req, res, next) => {
  const model = await ResourceFileService.readModelByID(req.params.id);
  return {
    data: model,
    message: 'Succesfully Model Retrieved',
  };
};

exports.updateModelByID = async (req, res, next) => {
  const model = await ResourceFileService.updateModelByID(req.params.id);
  return {
    data: model,
    message: 'Succesfully Model Updated',
  };
};

exports.readModelByPlacesID = async (req, res, next) => {
  const models = await ResourceFileService.readModelByPlacesID(
    req.params.placesID
  );
  return {
    data: models,
    message: 'Succesfully Models Retrived',
  };
};

exports.deleteModelByPlacesID = async (req, res, next) => {
  await ResourceFileService.deleteModelByPlacesID(req.params.placesID);
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
