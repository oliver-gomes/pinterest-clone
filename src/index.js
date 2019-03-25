const express = require("express");
const path = require("path");
const morgan = require("morgan");
const multer = require("multer");
const uuid = require("uuid");
const { format } = require("timeago.js");
// Initializations
const app = express();
require("./database");
// Settings
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
const storage = multer.diskStorage({
  destination: path.join(__dirname, "public/img/uploads"),
  filename: (req, file, cb, filename) => {
    cb(null, uuid() + path.extname(file.originalname));
  }
});
app.use(multer({ storage: storage }).single("image"));

// Global variables
app.use((req, res, next) => {
  app.locals.format = format;
  next();
});

// Routes
app.use(require("./routes/index"));

// Static files
app.use(express.static(path.join(__dirname, "public")));

// Start the Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Listening to ${PORT}`);
});
