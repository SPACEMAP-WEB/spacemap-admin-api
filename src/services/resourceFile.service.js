const ResourceFileModel = require('../models/contact.model');

exports.create = async (name, email, subject, message) => {
  const result = await ResourceFileModel.insertMany([
    {
      name,
      email,
      subject,
      message,
    },
  ]);
  return result;
};

exports.read = async () => {
  const result = await ResourceFileModel.find({});
  return result;
};

exports.readByID = async (id) => {
  const result = await ResourceFileModel.findById({ id });
  return result;
};

exports.update = async () => {
  const result = await ResourceFileModel.findByIdAndUpdate({});
  return result;
};

exports.deleteByID = async () => {
  await ResourceFileModel.findByIdAndDelete({});
};
