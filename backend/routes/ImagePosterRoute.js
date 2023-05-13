const express = require("express");
// const asyncHandler = require("express-async-handler");
const Poster = require("../model/ImagePostermodel");
const feature = require("../model/FeaturedModel")
const multer = require("multer");
const router = express();

const Storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage: Storage,
}).single("testImage");


router.all("/", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-type, Accept"
  );
  next();
});


router.post(
  "/poster", (req, res, next) => {
    upload(req, res, (err) => {
      if (!req.body) {
        console.log(err);
      } else {
        const newPoster = new Poster({
          title: req.body.title,
          category: req.body.category,
          image: {
            data: req.file.filename,
            contentType: "image/png",
          },
        });
         newPoster
          .save()
          .then(() => res.send("successful upload"))
          .catch((err) => console.log(err));
          // res.status(200)
      }
    });
  });

  router.post(
    "/product", (req, res, next) => {
      upload(req, res, (err) => {
        if (!req.body) {
          console.log(err);
        } else {
          const newFeatured = new feature({
            title: req.body.title,
            description:req.body.description,
            price:req.body.price,
            brand:req.body.brand,
            image:{
                data:req.file.filename,
                contentType:"image/png"
            }
          });
           newFeatured
            .save()
            .then(() => res.send("successful upload"))
            .catch((err) => console.log(err));
            // res.status(200)
        }
      });
    });
module.exports = router