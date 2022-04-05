let mongoose = require("mongoose");
let Schema = mongoose.Schema;
let resourceScheme = new Schema({
  created_at: { type: Date, default: Date.now },
  modified_at: { type: Date },
  deleted_at: { type: Date },
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  board_type: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("resource", resourceScheme);
