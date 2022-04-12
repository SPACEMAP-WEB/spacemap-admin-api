const ResourceModel = require('../models/resource.model');

exports.create = async (resource) => {
  const resourceModel = await ResourceModel.create(resource);
  return resourceModel;
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
  const resourceModel = await ResourceModel.findByIdAndUpdate({ _id }).exec();
  return resourceModel;
};

exports.deleteModelByID = async (_id) => {
  await ResourceModel.findByIdAndDelete({ _id });
};
