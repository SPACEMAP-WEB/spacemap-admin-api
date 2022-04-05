const ResourceModel = require("../models/resource");

exports.create = async function (title, content, board_type) {
  try {
    let resourceModels = await ResourceModel.insertMany([
      {
        title,
        content,
        board_type,
      },
    ]);
    console.log("!");
    console.log(resourceModels);
    return resourceModels;
  } catch (err) {
    return err;
  }
};

exports.read = async function () {
  try {
    let resourceModels = await ResourceModel.find({});
    console.log(result);
    return resourceModels;
  } catch (err) {
    return err;
  }
};

exports.readByID = async function (id) {
  try {
    let resourceModel = await ResourceModel.findById({ id: id });
    return resourceModel;
  } catch (err) {
    return err;
  }
};

exports.update = async function (id) {
  try {
    let resourceModel = await ResourceModel.findByIdAndUpdate({ id });
    return resourceModel;
  } catch (err) {
    return err;
  }
};

exports.delete = async function (id) {
  try {
    await ResourceModel.findByIdAndDelete({ id });
  } catch (err) {
    return err;
  }
};
