const ResourceModel = require('../models/resource.model');

exports.create = async (resource) => {
  const resourceModels = await ResourceModel.insertMany([resource]);
  return resourceModels;
};

exports.read = async () => {
  const resourceModels = await ResourceModel.find({});
  return resourceModels;
};

exports.readByID = async (_id) => {
  const resourceModel = await ResourceModel.findById({ _id });
  return resourceModel;
};

exports.update = async (_id) => {
  const resourceModel = await ResourceModel.findByIdAndUpdate({ _id });
  return resourceModel;
};

exports.deleteByID = async (_id) => {
  await ResourceModel.findByIdAndDelete({ _id });
};
