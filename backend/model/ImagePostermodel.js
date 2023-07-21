const mongoose = require("mongoose");

const posterSchema = mongoose.Schema({
  title: String,
  category: String,
  image: {
    data: Buffer,
    contentType: String,
  },
},
{
  timestamps: true,
});

module.exports = mongoose.model("PosterImage", posterSchema);

