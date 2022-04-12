const mongoose = require('mongoose');

const { Schema } = mongoose;
const resourceScheme = new Schema({
  createdAt: { type: Date, default: Date.now },
  modifiedAt: { type: Date },
  boardType: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  imagesLocations: {
    type: Array,
  },
  filesLocations: {
    type: Array,
  },
  // attached_resource_files: [
  //   { type: Schema.Types.ObjectId, ref: 'referenceFile' },
  // ],
});
module.exports = mongoose.model('resource', resourceScheme);
