/* eslint-disable no-unused-vars */
const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const path = require('path');
const favicon = require('serve-favicon');
// const fs = require('fs');
const os = require('os');
const cors = require('cors');
const mongoConnect = require('mongoose');
require('dotenv').config();

const app = express();

// temporary cors -> will be changed with configuration.
const domains = [
  'https://admin.spacemap42.com',
  'http://localhost:4006',
  'http://localhost:4000',
];
const corsOptions = {
  origin(origin, callback) {
    const isTrue = domains.indexOf(origin) !== -1;
    callback(null, isTrue);
  },
  allowHeaders: 'Content-Type',
  methods: 'GET, HEAD, PUT, PATCH, POST, DELETE',
  preflightContinue: false,
  credentials: true,
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.use(morgan('common'));
app.use(express.json({ extended: true, limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(express.urlencoded({ extended: true }));

const options = {
  uploadDir: os.tmpdir(),
  autoClean: true,
};

app.use(favicon(path.join(__dirname, '../public/images', 'favicon.ico')));
app.set('trust proxy', 'loopback');

app.use('/uploads', express.static(path.join(__dirname, '../public/uploads')));

app.use(cookieParser(''));
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: [process.env.COOKIE_SECRET, process.env.SESSION_SECRET],
    cookie: {
      httpOnly: true,
      secure: false,
    },
    name: 'session-cookie',
  })
);

const port = process.env.PORT || 4024;
// const port = 8080;

app.listen(port, () => {
  console.log(`Express server has started on port ${port}`);
});

// -----Routers----
const adminRouter = require('./routes/admin.route');

app.use('/', adminRouter);

const contact = require('./routes/contact.route');

app.use('/contact', contact);
app.use('/contacts', contact);

const resource = require('./routes/resource.route');

app.use('/resources', resource);
app.use('/resource', resource);

const resourceFile = require('./routes/resourceFile.route');

app.use('/resource-files', resourceFile);
app.use('/resource-file', resourceFile);

const user = require('./routes/user.route');

app.use('/users', user);
app.use('/user', user);
// -----Routers----

app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || 'Internal server error.';
  res.status(status).json({
    status,
    message,
  });
});

app.use((_req, res, next) => {
  res.status(404).json({
    status: 404,
    message: 'Not Found.',
  });
  next();
});

/* eslint-disable no-unused-vars */
