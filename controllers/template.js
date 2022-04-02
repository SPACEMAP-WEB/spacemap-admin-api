const Tabel = require("../models/contact");

exports.create = async function () {
  try {
    await Tabel.insertMany({});
  } catch (err) {
    console.log(err);
  }
};

exports.read = async function () {
  try {
    await Tabel.find({});
  } catch (err) {
    console.log(err);
  }
};

exports.readByID = async function () {
  try {
    await Tabel.findById({});
  } catch (err) {
    console.log(err);
  }
};

exports.update = async function () {
  try {
    await Tabel.findByIdAndUpdate({});
  } catch (err) {
    console.log(err);
  }
};

exports.delete = async function () {
  try {
    await Tabel.findByIdAndDelete({});
  } catch (err) {
    console.log(err);
  }
};
