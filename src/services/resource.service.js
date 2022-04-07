const ResourceModel = require("../models/resource.model");

exports.create = async function (resource) {
  console.log(resource);
  let resourceModels = await ResourceModel.insertMany([
    resource,
    // {
    //   title,
    //   content,
    //   board_type,
    // },
  ]);
  return resourceModels;
};

exports.read = async function () {
  let resourceModels = await ResourceModel.find({});
  return resourceModels;
};

exports.readByID = async function (id) {
  let resourceModel = await ResourceModel.findById({ id: id });
  return resourceModel;
};

exports.update = async function (id) {
  let resourceModel = await ResourceModel.findByIdAndUpdate({ id });
  return resourceModel;
};

exports.delete = async function (id) {
  await ResourceModel.findByIdAndDelete({ id });
};
