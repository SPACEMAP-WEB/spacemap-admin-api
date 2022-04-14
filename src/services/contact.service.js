const ContactModel = require('../models/contact.model');

exports.createModel = async (contactSchema) => {
  const result = await ContactModel.create(contactSchema);
  return result;
};

exports.readModel = async () => {
  const result = await ContactModel.find({});
  return result;
};

exports.readModelByID = async (_id) => {
  const result = await ContactModel.findById({ _id });
  return result;
};

exports.update = async () => {
  const result = await ContactModel.findByIdAndUpdate({}).exec();
  return result;
};

exports.deleteModelByID = async (_id) => {
  await ContactModel.findByIdAndDelete({ _id });
};
