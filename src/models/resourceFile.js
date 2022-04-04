let mongoose = require("mongoose");
let Schema = mongoose.Schema;
let resourceFileScheme = new Schema({
  created_at: { type: Date, default: Date.now },
  modified_at: { type: Date },
  deleted_at: { type: Date },
  filename: {
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
  resourceID: {
    type: int,
    required: true,
  },
  downloaded: {
    type: int,
    require: true,
  },
});
module.exports = mongoose.model("resourceFile", resourceFileScheme);
