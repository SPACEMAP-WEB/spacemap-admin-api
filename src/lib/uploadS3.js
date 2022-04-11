// const multer = require('multer');

// const storage = multer.diskStorage({
//   destination: './public/uploads',
//   filename(req, file, cb) {
//     const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
//     // console.log(req);
//     console.log(file);
//     cb(null, `${file.fieldname}-${uniqueSuffix}`);
//   },
// });

// const upload = multer({ storage });

const path = require('path');
const multer = require('multer');
const multerS3 = require('multer-s3');
const AWS = require('aws-sdk');

const credentials = new AWS.SharedIniFileCredentials({ profile: 'admin-work' });
AWS.config.credentials = credentials;
require('dotenv').config();

const s3 = new AWS.S3({ region: process.env.AWS_REGION });

const upload = multer({
  storage: multerS3({
    s3,
    bucket: 'spacemap',
    key(req, file, cb) {
      const extension = path.extname(file.originalname);
      cb(null, Date.now().toString() + extension);
    },
    acl: 'public-read-write',
  }),
});

module.exports = upload;
