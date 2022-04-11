const mongoose = require('mongoose');

const { Schema } = mongoose;
const userScheme = new Schema({
  createdAt: { type: Date, default: Date.now },
  lastLoggedAt: { type: Date },
  modifiedAt: { type: Date },
  email: {
    type: String,
    required: true,
  },
  userType: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  affiliation: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model('user', userScheme);
