const mongoose = require('mongoose');

const { Schema } = mongoose;
const resourceFileScheme = new Schema({
  created_at: { type: Date, default: Date.now },
  modified_at: { type: Date },
  deleted_at: { type: Date },
  places_id: { type: String, required: true },
  file_name: {
    type: String,
    required: true,
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
