const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/pinterestDB");

const db = mongoose.connection;

db.on("error", err => {
  console.log(err);
});

db.once("open", () => {
  console.log("Database connection established");
});
