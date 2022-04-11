const mongoose = require('mongoose');

const { Schema } = mongoose;
const resourceScheme = new Schema({
  createdAt: { type: Date, default: Date.now },
  modifiedAt: { type: Date },
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  boardType: {
    type: String,
    required: true,
  },
  // attached_resource_files: [
  //   { type: Schema.Types.ObjectId, ref: 'referenceFile' },
  // ],
});
module.exports = mongoose.model('resource', resourceScheme);
