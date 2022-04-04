const ResoureceModel = require("../resoureceModels/resourece");

exports.create = async function () {
  try {
    let resoureceModels = await ResoureceModel.insertMany({});
    return resoureceModels;
  } catch (err) {
    return err;
  }
};

exports.read = async function () {
  try {
    let resoureceModels = await ResoureceModel.find({});
    return resoureceModels;
  } catch (err) {
    return err;
  }
};

exports.readByID = async function (id) {
  try {
    let resoureceModel = await ResoureceModel.findById({ id: id });
    return resoureceModel;
  } catch (err) {
    return err;
  }
};

exports.update = async function (id) {
  try {
    let resoureceModel = await ResoureceModel.findByIdAndUpdate({ id });
    return resoureceModel;
  } catch (err) {
    return err;
  }
};

exports.delete = async function (id) {
  try {
    await ResoureceModel.findByIdAndDelete({ id });
  } catch (err) {
    return err;
  }
};
