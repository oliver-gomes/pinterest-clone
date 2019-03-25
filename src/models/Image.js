const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const imageSchema = new Schema({
  title: String,
  description: String,
  filename: String,
  path: String,
  originalname: String,
  mimetype: String,
  size: Number,
  created_at: {
    type: Date,
    default: Date.now()
  }
});

const Image = mongoose.model("Image", imageSchema);

module.exports = Image;
