const TemplateModel = require('../models/template.model');

exports.createModel = async () => {
  const templateModels = await TemplateModel.create();
  return templateModels;
};

exports.readModel = async () => {
  const templateModels = await TemplateModel.find({});
  return templateModels;
};

exports.readModelByID = async (_id) => {
  const templateModel = await TemplateModel.findById({ _id });
  return templateModel;
};

exports.updateModel = async (_id) => {
  const templateModel = await TemplateModel.findByIdAndUpdate({ _id }).exec();
  return templateModel;
};

exports.deleteModelByID = async (_id) => {
  await TemplateModel.findByIdAndDelete({ _id });
};
