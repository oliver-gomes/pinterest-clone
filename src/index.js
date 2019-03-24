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

// Global variables

// Routes

// Static files

// Start the Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Listening to ${PORT}`);
});
