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
}).single("image");


router.all("/", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-type, Accept"
  );
  next();
});

router.get('/images', (req, res) => {
    Poster.find({})
    .then((title, category, image, err)=>{
        if(err){
            console.log(err);
        }
        res.send(title, category, image)
    })
});


//Getting a specific docs
router.get(("/latest"), async(req, res) => {
  try {
    const image = await Poster.findOne({}) // Get the latest document
      .sort({ createdAt: -1 }) // Sort in descending order based on createdAt
     .exec()

     res.set('Content-Type', image.contentType);
     res.send(image.data);

    // if (!latestData) {
    //   return res.status(404).json({ error: 'No data found' });
    // }
    // const { title, category, image } = latestData;
    // res.set('Content-Type', image.contentType);
    // res.send({ title, category, image: image.data });
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});
      
//Getting all docs
router.get("/product-images", async(req, res) => {
   await feature.find({})
    .then((title, description, price, brand, err) => {
      if(err){
        console.log(err);
      }
      res.send(title, description, price, brand)
    })
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
            data: req.file.destination,
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