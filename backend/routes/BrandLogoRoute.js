const express = require("express");
// const asyncHandler = require("express-async-handler");
const logo = require("../model/BrandLogo");
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

//insert product into database
router.post("/new-logo", upload.single("image"), async (req, res) => {
    try {
      const brandLogo = new logo({
       
        brand: req.body.brand,
        type: req.body.type,
        image: {
          data: req.file.buffer,
          contentType: req.file.mimetype,
        },
      });
  
      await brandLogo.save();
  
      res.status(200).json({ message: "Successful upload" });
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Server error." });
    }
  });

  router.get("/logo", async(req, res) => {
    const brand = req.query.brand
   // console.log(brand)
    try {
      
      const oneLogo = await logo.findOne({brand: brand})
      //console.log("oneLogo:", oneLogo);
      
      if (!oneLogo || !oneLogo.image || !oneLogo.image.data) {
        return res.status(404).json({ message: "No logo found." });
      }
  
      const imageBase64 = oneLogo.image.data.toString("base64");
      //console.log("this is base64", imageBase64);
  
      if (!imageBase64) {
        return res.status(500).json({ message: "Image data conversion failed." });
      }
  
      res.json({image: imageBase64})
    } catch (error) {
      console.error(error)
      res.status(500).json({ message: "Server error." });
    }
  })

  module.exports = router;