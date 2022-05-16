const mongoose = require('mongoose');
const platformConn = require('../lib/mongoose');

const { Schema } = mongoose;
const userScheme = new Schema({
  createdAt: { type: Date, default: Date.now },
  email: {
    type: String,
    required: true,
  },
  provider: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  nickname: {
    type: String,
    required: true,
  },
  snsId: {
    type: String,
    required: true,
  },
});
module.exports = platformConn.model('user', userScheme);
