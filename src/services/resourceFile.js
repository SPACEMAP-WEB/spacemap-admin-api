const ResourceFileModel = require("../models/contact");

exports.create = async function (name, email, subject, message) {
  try {
    let result = await ResourceFileModel.insertMany([
      {
        name: name,
        email: email,
        subject: subject,
        message: message,
      },
    ]);
    return result;
  } catch (err) {
    return err;
  }
};

exports.read = async function () {
  try {
    let result = await ResourceFileModel.find({});
    return result;
  } catch (err) {
    return err;
  }
};

exports.readByID = async function (id) {
  try {
    let result = await ResourceFileModel.findById({ id: id });
    return result;
  } catch (err) {
    return err;
  }
};

exports.update = async function () {
  try {
    let result = await ResourceFileModel.findByIdAndUpdate({});
    return result;
  } catch (err) {
    return err;
  }
};

exports.delete = async function () {
  try {
    await ResourceFileModel.findByIdAndDelete({});
  } catch (err) {
    return err;
  }
};
