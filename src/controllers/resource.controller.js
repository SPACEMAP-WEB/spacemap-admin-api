/* eslint-disable no-unused-vars */
const ResourceService = require('../services/resource.service');
const ResourceFileService = require('../services/resourceFile.service');

exports.createModel = async (req, res, next) => {
  let resourceFileModels = [];
  let filesLocations = [];
  console.log('?');
  if (req.files.files) {
    [resourceFileModels, filesLocations] =
      await ResourceFileService.createModelCalledByResourceController(
        req.files
      );
    console.log('?');
  }

  const { boardType, title, content, imagesLocations } = req.body;
  const resourceInfo = {
    boardType,
    title,
    content,
    imagesLocations,
    filesLocations,
  };
  const model = await ResourceService.createModel(resourceInfo);

  let willBeAtachedPlaceIDResourceFileModels = [];
  if (imagesLocations) {
    if (Array.isArray(imagesLocations)) {
      const promise = imagesLocations.map(async (location) => {
        const resourceModel = await ResourceFileService.readModelsByOption({
          location,
        });
        willBeAtachedPlaceIDResourceFileModels =
          resourceFileModels.concat(resourceModel);
      });
      await Promise.all(promise);
    } else {
      const location = imagesLocations;
      const resourceModel = await ResourceFileService.readModelsByOption({
        location,
      });
      willBeAtachedPlaceIDResourceFileModels =
        resourceFileModels.concat(resourceModel);
    }
  }

  await ResourceFileService.updatePlacesIDsOfModels(
    willBeAtachedPlaceIDResourceFileModels,
    {
      placesID: model.id,
    }
  );

  return {
    data: model,
    message: 'Succesfully Model Created',
  };
};
exports.readModels = async (req, res, next) => {
  const models = await ResourceService.readModels();
  return {
    data: models,
    message: 'Succesfully Models Retrieved',
  };
};

exports.readModelByID = async (req, res, next) => {
  const model = await ResourceService.readModelByID(req.params.id);
  return {
    data: model,
    message: 'Succesfully Model Retrieved',
  };
};

exports.readModelByBoard = async (req, res, next) => {
  const model = await ResourceService.readModelByBoard(req.params.type);
  return {
    data: model,
    message: 'Succesfully Model Retrieved',
  };
};

exports.updateModelByID = async (req, res, next) => {
  const model = await ResourceService.updateModel(req.params.id);
  return {
    data: model,
    message: 'Succesfully Model Updated',
  };
};

exports.deleteModelByID = async (req, res, next) => {
  await ResourceFileService.deleteModelByPlacesID(req.params.id);
  await ResourceService.deleteModelByID(req.params.id);
  return {
    message: 'Succesfully Model Deleted',
  };
};
/* eslint-disable no-unused-vars */
