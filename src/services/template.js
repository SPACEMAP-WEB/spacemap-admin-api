const TemplateModel = require("../models/template");

exports.create = async function () {
  let templateModels = await TemplateModel.insertMany({});
  return templateModels;
};

exports.read = async function () {
  let templateModels = await TemplateModel.find({});
  return templateModels;
};

exports.readByID = async function (id) {
  let templateModel = await TemplateModel.findById({ id: id });
  return templateModel;
};

exports.update = async function (id) {
  let templateModel = await TemplateModel.findByIdAndUpdate({ id });
  return templateModel;
};

exports.delete = async function (id) {
  await TemplateModel.findByIdAndDelete({ id });
};
