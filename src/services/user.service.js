const UserModel = require("../models/user.model");

exports.create = async function (create) {
  let userModels = await UserModel.create(create);
  return userModels;
}

exports.read = async function () {
  let userModels = await UserModel.find({});
  return userModels;
};

exports.readByID = async function (_id) {
  let userModel = await UserModel.findById({ _id });
  return userModel;
};

exports.update = async function (_id, update) {
  let userModel = await UserModel.findByIdAndUpdate({ _id:_id} , update );
  return userModel;
};

exports.delete = async function (_id) {
  await UserModel.findByIdAndDelete({ _id });
};
