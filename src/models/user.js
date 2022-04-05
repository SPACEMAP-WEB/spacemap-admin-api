let mongoose = require("mongoose");
let Schema = mongoose.Schema;
let userScheme = new Schema({
  created_at: { type: Date, default: Date.now },
  last_logged_at: { type: Date },
  modified_at: { type: Date },
  deleted_at: { type: Date },
  id: {
    type: Number,
    required: true,
  },
  user_type: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  affiliation: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("user", userScheme);
