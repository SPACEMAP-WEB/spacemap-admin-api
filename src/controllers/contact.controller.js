const ContactService = require('../services/contact.service');


exports.createModel = async (req) => {
  const model = await ContactService.create(req.body);
  return {
    data: model,
    message: 'Succesfully Model Created',
  };
};
exports.readModels = async () => {
  const models = await ContactService.read();
  return {
    data: models,
    message: 'Succesfully Models Retrieved',
  };
};

exports.readModel = async (req) => {
  const model = await ContactService.readByID(req.params.id);
  return {
    data: model,
    message: 'Succesfully Model Retrieved',
  };
};

exports.deleteModelbyID = async (req, res, next) => {
  await ContactService.deleteByID(req.params.id);
  return {
    message: 'Succesfully Model Deleted',
  };
};
