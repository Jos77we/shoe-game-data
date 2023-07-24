const mongoose = require('mongoose')

const featuredSchema = mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    brand: String,
    image:{
        data:Buffer,
        contentType:String
    }
},
{
    timestamps: true,
  })

module.exports = mongoose.model("Featured", featuredSchema)