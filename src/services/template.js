const TemplateModel = require("../models/template");

exports.create = async function () {
  try {
    let templateModels = await TemplateModel.insertMany({});
    return templateModels;
  } catch (err) {
    return err;
  }
};

exports.read = async function () {
  try {
    let templateModels = await TemplateModel.find({});
    return templateModels;
  } catch (err) {
    return err;
  }
};

exports.readByID = async function (id) {
  try {
    let templateModel = await TemplateModel.findById({ id: id });
    return templateModel;
  } catch (err) {
    return err;
  }
};

exports.update = async function (id) {
  try {
    let templateModel = await TemplateModel.findByIdAndUpdate({ id });
    return templateModel;
  } catch (err) {
    return err;
  }
};

exports.delete = async function (id) {
  try {
    await TemplateModel.findByIdAndDelete({ id });
  } catch (err) {
    return err;
  }
};
