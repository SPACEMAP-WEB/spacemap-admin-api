let mongoose = require("mongoose");
let Schema = mongoose.Schema;
let contactScheme = new Schema({
  created_at: { type: Date, default: Date.now },
  modified_at: { type: Date },
  deleted_at: { type: Date },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("contact", contactScheme);
