const mongoose = require('mongoose');

const { Schema } = mongoose;
const resourceFileScheme = new Schema({
  created_at: { type: Date, default: Date.now },
  modified_at: { type: Date },
  deleted_at: { type: Date },
  places_id: { required: true },
  file_name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  size: {
    type: Number,
  },
  resource_ID: {
    type: Number,
    required: true,
  },
  downloaded: {
    type: Number,
  },
});
module.exports = mongoose.model('resourceFile', resourceFileScheme);
