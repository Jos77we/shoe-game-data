const express = require("express");
// const asyncHandler = require("express-async-handler");
const Poster = require("../model/ImagePostermodel");
const feature = require("../model/FeaturedModel");
const multer = require("multer");
const router = express();


// const Storage = multer.diskStorage({
//   destination: "uploads",
//   filename: (req, file, cb) => {
//     cb(null, file.originalname);
//   },
// });

// const upload = multer({
//   storage: Storage,
// }).single("image");

const storage = multer.memoryStorage(); // Save the file in memory as a Buffer

// File filter to accept only image files (modify as per your requirements)
const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image/")) {
    cb(null, true);
  } else {
    cb(new Error("Invalid file type. Only image files are allowed."));
  }
};

const upload = multer({ storage, fileFilter });

router.all("/", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-type, Accept"
  );
  next();
});

router.get("/images", (req, res) => {
  Poster.find({}).then((title, category, image, err) => {
    if (err) {
      console.log(err);
    }
    res.send(title, category, image);
  });
});

//Getting a specific docs
// const imageItem = await Poster.findOne().sort({ createdAt: -1 }).exec()
router.get("/poster/recent", async (req, res) => {
  try {
    const mostRecentPoster = await Poster.findOne()
      .sort({ createdAt: -1 })
    

    if (
      !mostRecentPoster ||
      !mostRecentPoster.image ||
      !mostRecentPoster.image.data
    ) {
      return res.status(404).json({ message: "No posters found." });
    }

    const imageBase64 = mostRecentPoster.image.data.toString("base64");
    //console.log("this is base64", imageBase64);

    if (!imageBase64) {
      return res.status(500).json({ message: "Image data conversion failed." });
    }

    const { title, category } = mostRecentPoster;

    res.json({
      title,
      category,
      image: imageBase64,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});


router.get("/product/recent", async (req, res) => {
  try {
    const mostRecentProduct = await feature.findOne()
      .sort({ createdAt: -1 })
      .limit(1);

    if (
      !mostRecentProduct ||
      !mostRecentProduct.image ||
      !mostRecentProduct.image.data
    ) {
      return res.status(404).json({ message: "No posters found." });
    }

    const imageBase64 = mostRecentProduct.image.data.toString("base64");
    //console.log("this is base64", imageBase64);

    if (!imageBase64) {
      return res.status(500).json({ message: "Image data conversion failed." });
    }

    const { title, description, price, brand} = mostRecentProduct;

    res.json({
      title,
      description,
      price,
      brand,
      image: imageBase64,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});




//Getting all docs
router.get("/product-images", async (req, res) => {
  await feature.find({}).then((title, description, price, brand, err) => {
    if (err) {
      console.log(err);
    }
    res.send(title, description, price, brand);
  });
});

// router.post(
//   "/poster", (req, res, next) => {
//     upload(req, res, async(err) => {
//       if (!req.body) {
//         console.log(err);
//       } else {
//         const newPoster = new Poster({
//           title: req.body.title,
//           category: req.body.category,
//           image:{
//             data:req.file.buffer,
//             contentType:"image/png"
//         }

//         });
//         await newPoster
//           .save()
//           .then(() => res.send("successful upload"))
//           .catch((err) => console.log(err));
//           // res.status(200)
//       }
//     });
//   });

router.post("/poster", upload.single("image"), async (req, res) => {
  try {
    const newPoster = new Poster({
      title: req.body.title,
      category: req.body.category,
      image: {
        data: req.file.buffer,
        contentType: req.file.mimetype,
      },
    });

    await newPoster.save();

    res.status(200).json({ message: "Successful upload" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server error." });
  }
});

router.post("/product", upload.single("image"), async (req, res) => {
  try {
    const newFeatured = new feature({
      title: req.body.title,
      description: req.body.description,
      price: req.body.price,
      brand: req.body.brand,
      image: {
        data: req.file.buffer,
        contentType: req.file.mimetype,
      },
    });
    await newFeatured.save();

    res.status(200).json({ message: "Successful upload" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server error." });
  }
});

// router.post(
//   "/product", (req, res, next) => {
//     upload(req, res, (err) => {
//       if (!req.body) {
//         console.log(err);
//       } else {
//         const newFeatured = new feature({
//           title: req.body.title,
//           description:req.body.description,
//           price:req.body.price,
//           brand:req.body.brand,
//           image:{
//               data:req.file.buffer,
//               contentType:req.file.mimetype
//           }
//         });
//          newFeatured
//           .save()
//           .then(() => res.send("successful upload"))
//           .catch((err) => console.log(err));
//           // res.status(200)
//       }
//     });
//   });
module.exports = router;
