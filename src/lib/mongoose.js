const mongoose = require('mongoose');
require('dotenv').config();

const MONGO_URI = process.env.MONGO_INFO;
mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'SPACEMAP-ADMIN'
  })
  .then(() => console.log('Successfully connected to mongodb'))
  .catch((e) => console.error(e));


const platformDB = require('mongoose');
const platformConn = platformDB.createConnection(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'SPACEMAP-PLATFORM'
})

module.exports = platformConn;