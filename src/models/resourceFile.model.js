const mongoose = require('mongoose');

const { Schema } = mongoose;
const resourceFileScheme = new Schema({
  createdAt: { type: Date, default: Date.now },
  modifiedAt: { type: Date },
  fieldname: { type: String },
  placesID: { type: String, default: 0 },
  originalName: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    require: true,
  },
  type: {
    type: String,
  },
  size: {
    type: Number,
  },
  downloaded: {
    type: Number,
  },
});
module.exports = mongoose.model('resourceFile', resourceFileScheme);
