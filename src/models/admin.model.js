let mongoose = require("mongoose");
let Schema = mongoose.Schema;
let adminScheme = new Schema({
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
      }
    },
  ],
});
module.exports = mongoose.model("admin", adminScheme);
