const mongoose = require("mongoose");

const BrandLogoSchema = mongoose.Schema(
    {
        image: {
            data: Buffer,
            contentType: String
        },

        brand : {type: String},
        type: {type: String}
    }
);

module.exports = mongoose.model("BrandLogo", BrandLogoSchema );