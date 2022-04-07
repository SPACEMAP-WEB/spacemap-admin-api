const UserModel = require("../models/user.model");

exports.create = async function (id, user_type, password, firstname, lastname, affiliation, username, email) {
  let userModels = await UserModel.insertMany([
    {
      id,
      user_type,
      password,
      firstname,
      lastname,
      affiliation,
      username,
      email,
    },
  ]);
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
