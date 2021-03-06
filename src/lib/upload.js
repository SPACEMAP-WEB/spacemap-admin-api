const multer = require('multer');

const storage = multer.diskStorage({
  destination: './public/uploads',
  filename(req, file, cb) {
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    cb(null, `${file.fieldname}-${uniqueSuffix}`);
  },
});

const upload = multer({ storage });

// const path = require('path');
// const multer = require('multer');
// const multerS3 = require('multer-s3');
// const AWS = require('aws-sdk');
// require('dotenv').config();

// AWS.config = {
//   accessKeyId: process.env.AWS_ACCESS_KEY,
//   secretAccessKey: process.env.AWS_SECRET_KEY,
//   region: process.env.AWS_REGION,
// };

// const s3 = new AWS.S3();

// const upload = multer({
//   storage: multerS3({
//     s3,
//     bucket: 'spacemap',
//     key(req, file, cb) {
//       const extension = path.extname(file.originalname);
//       cb(null, Date.now().toString() + extension);
//     },
//     acl: 'public-read-write',
//   }),
// });

module.exports = upload;
