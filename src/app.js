/* eslint-disable no-unused-vars */
const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const path = require('path');
const favicon = require('serve-favicon');
// const fs = require('fs');
const mongoConnect = require('./lib/mongoose');
require('dotenv').config();

const app = express();

app.use(morgan('common'));
app.use(express.json({ limit: '1gb', extended: true }));
app.use(
  express.urlencoded({ limit: '1gb', extended: true, parameterLimit: 50000000 })
);

app.use(favicon(path.join(__dirname, '../public/images', 'favicon.ico')));
app.set('trust proxy', 'loopback');

app.use(express.static('public'));
app.use(express.static('script'));

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

const port = process.env.PORT || 3007;
app.listen(port, () => {
  console.log('Express server has started on port 3007');
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
