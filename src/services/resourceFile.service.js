const ResourceFileModel = require('../models/resourceFile.model');
const { deleteObjectByKey } = require('../lib/S3Client');

exports.createModel = async (placesID, file) => {
  console.log(file);
  console.log(file.key);
  const fileName = file.key;
  const originalName = file.originalname;
  const type = file.mimetype;
  const { location } = file;
  const resourceFileInfo = { placesID, fileName, originalName, location, type };
  const result = await ResourceFileModel.create(resourceFileInfo);
  return result;
};

exports.readModelsByOption = async (option) => {
  const results = await ResourceFileModel.find(option);
  return results;
};

exports.readModelByID = async (_id) => {
  const result = await ResourceFileModel.findById({ _id });
  return result;
};

exports.updatePlacesIDsOfModels = async (models, placesID) => {
  console.log(models);
  const promise = models.map(async (resourceFile) => {
    await this.updatePlacesIDOfModel(resourceFile, placesID);
  });
  await Promise.all(promise);
};

exports.updatePlacesIDOfModel = async (model, updateInfo) => {
  const result = await ResourceFileModel.findById(model.id);
  result.placesID = updateInfo.placesID;
  const newResult = await result.save();
  return newResult;
};

exports.readModelByPlacesID = async (placesID) => {
  console.log(placesID);
  const result = await ResourceFileModel.find({ placesID });
  return result;
};

exports.deleteModelByPlacesID = async (placesID) => {
  const deleatedModel = await ResourceFileModel.findOneAndDelete({ placesID });
  await ResourceFileModel.findOneAndDelete(deleatedModel.fileName);
};

exports.deleteModelByFileName = async (fileName) => {
  await deleteObjectByKey(fileName.fileName);
  await ResourceFileModel.findOneAndDelete(fileName);
};

exports.deleteModelByID = async (_id) => {
  await ResourceFileModel.findByIdAndDelete({ _id });
};

exports.createModelCalledByResourceController = async (files) => {
  const [resourceFileModels, filesLocations] = [[], []];

  const keys = Object.keys(files);
  const promise = keys.map(async (key) => {
    const filesByKey = files[key];
    const promiseInPromise = filesByKey.map(async (file) => {
      const model = await this.createModel(0, file);
      resourceFileModels.push(model);
      if (key === 'files') filesLocations.push(file.location);
    });
    await Promise.all(promiseInPromise);
  });
  await Promise.all(promise);

  return { resourceFileModels, filesLocations };
};
