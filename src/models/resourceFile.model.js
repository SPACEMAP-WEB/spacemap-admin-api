let mongoose = require("mongoose");
let Schema = mongoose.Schema;
let resourceFileScheme = new Schema({
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
    type: int,
  },
  resource_ID: {
    type: int,
    required: true,
  },
  downloaded: {
    type: int,
  },
});
module.exports = mongoose.model("resourceFile", resourceFileScheme);
