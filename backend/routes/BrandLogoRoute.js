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

  module.exports = router;