const ContactModel = require("../models/contact");

exports.create = async function (name, email, subject, message) {
  try {
    let result = await ContactModel.insertMany([
      {
        name,
        email,
        subject,
        message,
      },
    ]);
    return result;
  } catch (err) {
    return err;
  }
};

exports.read = async function () {
  try {
    let result = await ContactModel.find({});
    return result;
  } catch (err) {
    return err;
  }
};

exports.readByID = async function (id) {
  try {
    let result = await ContactModel.findById({ id: id });
    return result;
  } catch (err) {
    return err;
  }
};

exports.update = async function () {
  try {
    let result = await ContactModel.findByIdAndUpdate({});
    return result;
  } catch (err) {
    return err;
  }
};

exports.delete = async function () {
  try {
    await ContactModel.findByIdAndDelete({});
  } catch (err) {
    return err;
  }
};
