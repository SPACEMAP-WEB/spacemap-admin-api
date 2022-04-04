const UserUserModel = require("../models/user");

exports.create = async function () {
  try {
    let userModels = await UserModel.insertMany({});
    return userModels;
  } catch (err) {
    return err;
  }
};

exports.read = async function () {
  try {
    let userModels = await UserModel.find({});
    return userModels;
  } catch (err) {
    return err;
  }
};

exports.readByID = async function (id) {
  try {
    let userModel = await UserModel.findById({ id: id });
    return userModel;
  } catch (err) {
    return err;
  }
};

exports.update = async function (id) {
  try {
    let userModel = await UserModel.findByIdAndUpdate({ id });
    return userModel;
  } catch (err) {
    return err;
  }
};

exports.delete = async function (id) {
  try {
    await UserModel.findByIdAndDelete({ id });
  } catch (err) {
    return err;
  }
};
