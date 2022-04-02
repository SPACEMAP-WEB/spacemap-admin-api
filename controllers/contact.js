const ContactModel = require("../models/contact");
exports.create = async function (name, email, subject, message) {
  try {
    let result = await ContactModel.insertMany([
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
    let result = await ContatUsTable.find({});
    return result;
  } catch (err) {
    return err;
  }
};

exports.readByID = async function (id) {
  try {
    let result = await ContatUsTable.findById({ id: id });
    return result;
  } catch (err) {
    return err;
  }
};

exports.update = async function () {
  try {
    await ContatUsTable.findByIdAndUpdate({});
  } catch (err) {
    return err;
  }
};

exports.delete = async function () {
  try {
    await ContatUsTable.findByIdAndDelete({});
  } catch (err) {
    return err;
  }
};
