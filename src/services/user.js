const UserModel = require("../models/user");

exports.create = async function () {
  let userModels = await UserModel.insertMany({});
  return userModels;
};

exports.read = async function () {
  let userModels = await UserModel.find({});
  return userModels;
};

exports.readByID = async function (id) {
  let userModel = await UserModel.findById({ id: id });
  return userModel;
};

exports.update = async function (id) {
  let userModel = await UserModel.findByIdAndUpdate({ id });
  return userModel;
};

exports.delete = async function (id) {
  await UserModel.findByIdAndDelete({ id });
};
