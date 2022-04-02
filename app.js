const express = require("express");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const dotenv = require("dotenv");
const path = require("path");
var favicon = require("serve-favicon");
const fs = require("fs");
const mongoConnect = require("./models");
dotenv.config();

const app = express();

app.use(morgan("common"));
// app.use(express.json({ limit: '1gb', extended: true }));
// app.use(express.urlencoded({ limit: '1gb', extended: true, parameterLimit: 50000000 }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(favicon(path.join(__dirname, "public/images", "favicon.ico")));
app.set("trust proxy", "loopback");
// app.set('views', [__dirname + '/views', __dirname + '/views/subpages_dcs', __dirname + '/views/subpages_launch']);

app.use(express.static("public"));
app.use(express.static("script"));

app.use(cookieParser(""));
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: [process.env.COOKIE_SECRET, process.env.SESSION_SECRET],
    cookie: {
      httpOnly: true,
      secure: false,
    },
    name: "session-cookie",
  })
);

var port = process.env.PORT || 3007;
var server = app.listen(port, function () {
  console.log("Express server has started on port 3007");
});

//-----Routers----
const mainrouter = require("./routes/main")(app, fs);
app.use("/", mainrouter);

const contact = require("./routes/contact")(app, fs);
app.use("/contact", contact);
app.use("/contacts", contact);

const resource = require("./routes/resource")(app, fs);
app.use("/resources", resource);
app.use("/resource", resource);

const resourceFile = require("./routes/resourceFile")(app, fs);
app.use("/resource-files", resourceFile);
app.use("/resource-file", resourceFile);

const user = require("./routes/user")(app, fs);
app.use("/usesr", user);
app.use("/user", user);
//-----Routers----

app.use((req, res, next) => {
  const error = new Error(`${req.method} ${req.url} no router.`);
  error.status = 404;
  next(error);
});

app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = process.env.NODE_ENV !== "production" ? err : {};
  res.status(err.status || 500);
  res.render("error");
});
