const mongoose = require("mongoose");

const posterSchema = mongoose.Schema({
  title: String,
  category: String,
  image: {
    data: Buffer,
    contentType: String,
  },
});

module.exports = mongoose.model("PosterImage", posterSchema);

