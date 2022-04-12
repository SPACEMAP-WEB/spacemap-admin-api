/* eslint-disable no-unused-vars */
const ResourceService = require('../services/resource.service');
const ResourceFileService = require('../services/resourceFile.service');

exports.createModel = async (req, res, next) => {
  // const model = await ResourceService.create(req.body);
  const { resourceFiles, imagesLocations, filesLocations } =
    await ResourceFileService.createModelByResource(req.files);

  const { boardType, title, content } = req.body;
  const resourceInfo = {
    boardType,
    title,
    content,
    imagesLocations,
    filesLocations,
  };

  const model = await ResourceService.create(resourceInfo);

  // const updated = await resourceFiles.reduce(
  //   async (updatedResourceFiles, resourceFile) => {
  //     // console.log('RESOURCEFILE:', resourceFile);
  //     // console.log(model.id);
  //     console.log(updatedResourceFiles);
  //     updatedResourceFiles.push(
  //       await ResourceFileService.updatePlacesIDOfModel(resourceFile, {
  //         placesID: model.id,
  //       })
  //     );
  //   },
  //   Promise.resolve()
  // );
  const promise = resourceFiles.map(async (resourceFile) => {
    await ResourceFileService.updatePlacesIDOfModel(resourceFile, {
      placesID: model.id,
    });
  });
  await Promise.all(promise);

  // console.log(updated);
  return {
    data: model,
    message: 'Succesfully Model Created',
  };
};
exports.readModels = async (req, res, next) => {
  const models = await ResourceService.read();
  return {
    data: models,
    message: 'Succesfully Models Retrieved',
  };
};

exports.readModel = async (req, res, next) => {
  const model = await ResourceService.readByID(req.params.id);
  return {
    data: model,
    message: 'Succesfully Model Retrieved',
  };
};

exports.updateModelByID = async (req, res, next) => {
  const model = await ResourceService.update(req.params.id);
  return {
    data: model,
    message: 'Succesfully Model Updated',
  };
};

exports.deleteModelByID = async (req, res, next) => {
  await ResourceService.deleteModelByID(req.params.id);
  return {
    message: 'Succesfully Model Deleted',
  };
};
/* eslint-disable no-unused-vars */
