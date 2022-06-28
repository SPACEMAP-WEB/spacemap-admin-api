const UserModel = require('../models/user.model');

exports.createModel = async (create) => {
  const userModels = await UserModel.create(create);
  return userModels;
};

exports.readModel = async () => {
  const userModels = await UserModel.find({});
  return userModels;
};

exports.readModelByID = async (_id) => {
  const userModel = await UserModel.findById({ _id });
  return userModel;
};

exports.updateModel = async (_id, update) => {
  const userModel = await UserModel.findByIdAndUpdate({ _id }, update).exec();
  return userModel;
};

exports.deleteModelByID = async (_id) => {
  await UserModel.findByIdAndDelete({ _id });
};

exports.changeDB = async (name) => {
};