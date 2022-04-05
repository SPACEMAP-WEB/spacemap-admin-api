const { HttpException } = require("../common/exceptions");
const ContactModel = require("../models/contact");

exports.create = async function (name, email, subject, message) {
  let result = await ContactModel.insertMany([
    {
      name,
      email,
      subject,
      message,
    },
  ]);
  return result;
};

exports.read = async function () {
  let result = await ContactModel.find({});
  return result;
};

exports.readByID = async function (id) {
  let result = await ContactModel.findById({ id: id });
  return result;
};

exports.update = async function () {
  let result = await ContactModel.findByIdAndUpdate({});
  return result;
};

exports.delete = async function () {
  await ContactModel.findByIdAndDelete({});
};
