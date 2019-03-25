const { Router } = require("express");
const router = Router();

const path = require("path");
const { unlink } = require("fs-extra");

const Image = require("../models/Image");

router.get("/", async (req, res, next) => {
  const images = await Image.find();
  res.render("index", { images });
});

router.get("/upload", (req, res, next) => {
  res.render("upload");
});

router.post("/upload", async (req, res, next) => {
  const image = new Image();
  image.title = req.body.title;
  image.description = req.body.description;
  image.filename = req.file.filename;
  image.path = "/img/uploads/" + req.file.filename;
  image.originalname = req.file.originalname;
  image.mimetype = req.file.mimetype;
  image.size = req.file.size;

  await image.save();

  res.redirect("/");

  res.send("Uploaded");
});

router.get("/image/:id", async (req, res) => {
  const { id } = req.params;
  const image = await Image.findById(id);
  console.log(image);
  res.render("profile", { image });
});

router.get("/image/:id/delete", async (req, res) => {
  const { id } = req.params;
  const image = await Image.findByIdAndRemove(id);
  await unlink(path.resolve("./src/public/" + image.path));
  res.redirect("/");
});

module.exports = router;
