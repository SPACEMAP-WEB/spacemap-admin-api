const UserModel = require('../models/user.model');

exports.create = async (create) => {
  const userModels = await UserModel.create(create);
  return userModels;
};

exports.read = async () => {
  const userModels = await UserModel.find({});
  return userModels;
};

exports.readByID = async (_id) => {
  const userModel = await UserModel.findById({ _id });
  return userModel;
};

exports.update = async (_id, update) => {
  const userModel = await UserModel.findByIdAndUpdate({ _id }, update);
  return userModel;
};

exports.deleteModelByID = async (_id) => {
  await UserModel.findByIdAndDelete({ _id });
};
