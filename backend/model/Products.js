const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    price: { type: String },
    size: { type: String },
    colors: { type: String },
    desc: { type: String },
    rating: {
      type: Number,
      validate: {
        validator: Number.isInteger,
        message: "{VALUE} is not an integer value",
      },
    },
    image: {
      data: Buffer ,
      contentType: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", productSchema);
