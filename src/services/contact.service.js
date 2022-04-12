const ContactModel = require('../models/contact.model');

exports.create = async (contactSchema) => {
  const result = await ContactModel.create(contactSchema);
  return result;
};

exports.read = async () => {
  const result = await ContactModel.find({});
  return result;
};

exports.readByID = async (id) => {
  const result = await ContactModel.findById({ id });
  return result;
};

exports.update = async () => {
  const result = await ContactModel.findByIdAndUpdate({}).exec();
  return result;
};

exports.deleteModelByID = async (_id) => {
  await ContactModel.findByIdAndDelete({ _id });
};
