const ResourceModel = require('../models/resource.model');

exports.create = async (resource) => {
  const resourceModels = await ResourceModel.insertMany([resource]);
  return resourceModels;
};

exports.read = async () => {
  const resourceModels = await ResourceModel.find({});
  return resourceModels;
};

exports.readByID = async (id) => {
  const resourceModel = await ResourceModel.findById({ id });
  return resourceModel;
};

exports.update = async (id) => {
  const resourceModel = await ResourceModel.findByIdAndUpdate({ id });
  return resourceModel;
};

exports.deleteByID = async (id) => {
  await ResourceModel.findByIdAndDelete({ id });
};
