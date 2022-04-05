const ResourceModel = require("../models/resource");

exports.create = async function (title, content, board_type) {
  let resourceModels = await ResourceModel.insertMany([
    {
      title,
      content,
      board_type,
    },
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
