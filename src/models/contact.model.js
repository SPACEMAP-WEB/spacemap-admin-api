const mongoose = require('mongoose');

const { Schema } = mongoose;
const contactScheme = new Schema({
  createdAt: { type: Date, default: Date.now },
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
module.exports = mongoose.model('contact', contactScheme);
