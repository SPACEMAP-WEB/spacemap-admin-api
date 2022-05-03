const path = require('path');
const multer = require('multer');
const multerS3 = require('multer-s3');
const AWS = require('aws-sdk');
require('dotenv').config();

const credentials = new AWS.SharedIniFileCredentials({ profile: 'admin-work' });
AWS.config.credentials = credentials;
const s3 = new AWS.S3({ region: process.env.AWS_REGION });

const upload = multer({
  storage: multerS3({
    s3,
    bucket: 'spacemap',
    key(req, file, cb) {
      const extension = path.extname(file.originalname);
      cb(null, file.originalname + extension);
    },
    acl: 'public-read-write',
  }),
});

const deleteObjectByKey = async (key) => {
  s3.deleteObject({ Bucket: 'spacemap', Key: key }, (err, data) => {
    return data;
  });
};

module.exports = { upload, deleteObjectByKey };
