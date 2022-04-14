const ResourceModel = require('../models/resource.model');

exports.createModel = async (resource) => {
  const resourceModel = await ResourceModel.create(resource);
  return resourceModel;
};

exports.readModels = async () => {
  const resourceModels = await ResourceModel.find({});
  return resourceModels;
};

exports.readModelByID = async (_id) => {
  const resourceModel = await ResourceModel.findById({ _id });
  return resourceModel;
};

exports.updateModel = async (_id) => {
  const resourceModel = await ResourceModel.findByIdAndUpdate({ _id }).exec();
  return resourceModel;
};

exports.deleteModelByID = async (_id) => {
  await ResourceModel.findByIdAndDelete({ _id });
};
