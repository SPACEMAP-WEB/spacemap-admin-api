const { HttpException } = require("../common/exceptions");
const ContactModel = require("../models/contact.model");

exports.create = async function (create) {
  let result = await ContactModel.create(create);
  return result;
};

exports.read = async function () {
  let result = await ContactModel.find({});
  return result;
};

exports.readByID = async function (_id) {
  let result = await ContactModel.findById({ _id });
  return result;
};

exports.update = async function () {
  let result = await ContactModel.findByIdAndUpdate({});
  return result;
};

exports.delete = async function (_id) {
  await ContactModel.findByIdAndDelete({ _id });
};
