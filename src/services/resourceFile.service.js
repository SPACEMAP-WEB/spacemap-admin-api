const ResourceFileModel = require('../models/resourceFile.model');

exports.createModel = async (resourceFile) => {
  const result = await ResourceFileModel.create(resourceFile);
  return result;
};

exports.readModels = async () => {
  const result = await ResourceFileModel.find({});
  return result;
};

exports.readModelByID = async (_id) => {
  const result = await ResourceFileModel.findById({ _id });
  return result;
};

exports.updatePlacesIDOfModel = async (model, updateInfo) => {
  const result = await ResourceFileModel.findById(model.id);
  result.placesID = updateInfo.placesID;
  const newResult = await result.save();
  return newResult;
};

exports.readModelByPlacesID = async (placesID) => {
  const result = await ResourceFileModel.find({ placesID }).exec();
  return result;
};

exports.deleteModelByPlacesID = async (placesID) => {
  await ResourceFileModel.findOneAndDelete({ placesID });
};

exports.deleteModelByID = async (_id) => {
  await ResourceFileModel.findByIdAndDelete({ _id });
};

exports.createModelByResource = async (files) => {
  const [resourceFiles, filesLocations, imagesLocations] = [[], [], []];

  const keys = Object.keys(files);
  const promise = keys.map(async (key) => {
    const filesByKey = files[key];
    const promiseInPromise = filesByKey.map(async (file) => {
      const fieldName = file.filedname;
      const originalName = file.originalname;
      const { location } = file;
      const resourceFileInfo = { fieldName, originalName, location };
      const model = await this.createModel(resourceFileInfo);
      resourceFiles.push(model);
      if (key === 'files') filesLocations.push(location);
      else if (key === 'images') imagesLocations.push(location);
    });
    await Promise.all(promiseInPromise);
  });
  await Promise.all(promise);

  return { resourceFiles, filesLocations, imagesLocations };
};
