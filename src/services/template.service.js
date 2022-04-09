const TemplateModel = require('../models/template.model');

exports.create = async () => {
  const templateModels = await TemplateModel.insertMany({});
  return templateModels;
};

exports.read = async () => {
  const templateModels = await TemplateModel.find({});
  return templateModels;
};

exports.readByID = async (id) => {
  const templateModel = await TemplateModel.findById({ id });
  return templateModel;
};

exports.update = async (id) => {
  const templateModel = await TemplateModel.findByIdAndUpdate({ id });
  return templateModel;
};

exports.deleteModelByID = async (id) => {
  await TemplateModel.findByIdAndDelete({ id });
};
