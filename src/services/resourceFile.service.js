const ResourceFileModel = require("../models/contact.model");

exports.create = async function (name, email, subject, message) {
  let result = await ResourceFileModel.insertMany([
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
  let result = await ResourceFileModel.find({});
  return result;
};

exports.readByID = async function (id) {
  let result = await ResourceFileModel.findById({ id: id });
  return result;
};

exports.update = async function () {
  let result = await ResourceFileModel.findByIdAndUpdate({});
  return result;
};

exports.delete = async function () {
  await ResourceFileModel.findByIdAndDelete({});
};
