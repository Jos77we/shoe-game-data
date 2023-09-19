const express = require("express");
// const asyncHandler = require("express-async-handler");
const products = require("../model/Products");
const multer = require("multer");
const router = express();

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

//insert product into database
router.post("/new-product", upload.single("image"), async (req, res) => {
  try {
    const newProduct = new products({
      name: req.body.name,
      brand: req.body.brand,
      rating: req.body.rating,
      price: req.body.price,
      size: req.body.size,
      colors: req.body.colors,
      desc: req.body.desc,
      image: {
        data: req.file.buffer,
        contentType: req.file.mimetype,
      },
    });

    await newProduct.save();

    res.status(200).json({ message: "Successful upload" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server error." });
  }
});

//get all the products in database
router.get("/all-products", async (req, res) => {
  try {
    const allDoc = await products.find()

    const documentsWithBase64Image = allDoc.map((doc) => ({
      ...doc.toObject(),
      image: {
        data: doc.image.data.toString('base64'), // Convert the buffer to base64 string
        contentType: doc.image.contentType,
      },
    }));

    res.json(documentsWithBase64Image);

  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

//get the most recent
router.get("/new-product/recent", async (req, res) => {
  try {
    const mostRecentNewProduct = await products
      .findOne()
      .sort({ _id: -1 })
      

    if (
      !mostRecentNewProduct ||
      !mostRecentNewProduct.image ||
      !mostRecentNewProduct.image.data
    ) {
      return res.status(404).json({ message: "No posters found." });
    }

    const imageBase64 = mostRecentNewProduct.image.data.toString("base64");
    //console.log("this is base64", imageBase64);

    if (!imageBase64) {
      return res.status(500).json({ message: "Image data conversion failed." });
    }

    const { name, brand, price, size, colors, desc, rating } =
      mostRecentNewProduct;

    res.json({
      name,
      brand,
      rating,
      price,
      size,
      colors,
      desc,
      image: imageBase64,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

router.get("/all-products/all", async (req, res) => {
  try {
    const all =await products.find().select("name brand price size")
    res.json(all)
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
  
   
});

//getting shoes by their brand
router.get("/brand-shoes", async(req, res) => {
  //const brand = req.query.brand
  const { brandNames } = req.query;
  //const brands = brandNames.split(',');
  try {
    const api = await products.find({brand: { $in: brandNames }}).limit(16)
    const productData = api.map((product) => ({
      ...product.toObject(),
      name: product.name,
      price: product.price,
      imageUrl: {
        data: product.image.data.toString('base64'), // Convert the buffer to base64 string
        contentType: product.image.contentType,
      },
    }));
      res.json(productData )
     
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
  //res.send('Response send to client::'+req.query.brand);
})

//gettting the tottal number of products
const pipeline = [
  {
    $group: {
      _id: '$brand', // Group by the 'gender' field
      count: { $sum: 1 }, // Count the documents in each group
    },
  },
];
router.get("/total", async(req,res) => {
 try {
  const ress = await products.aggregate(pipeline).exec()
  res.json(ress)
  //  console.log(ress)
 } catch (error) {
  console.log(error)
 }
})
module.exports = router;
