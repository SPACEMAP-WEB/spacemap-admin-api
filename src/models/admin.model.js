const mongoose = require('mongoose');

const { Schema } = mongoose;
const adminScheme = new Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  refreshtokens: [
    {
      name: {
        type: String,
        unique: true,
      },
      refreshtoken: {
        type: String,
      },
    },
  ],
});
module.exports = mongoose.model('admin', adminScheme);
