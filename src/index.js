const express = require("express");
const path = require("path");
const morgan = require("morgan");
const multer = require("multer");

// Initializations
const app = express();

// Settings
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(
  multer({ dest: path.join(__dirname, "public/img/uploads") }).single("image")
);

// Global variables

// Routes
app.use(require("./routes/index"));

// Static files

// Start the Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Listening to ${PORT}`);
});
