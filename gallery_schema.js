const mongoose = require("mongoose");

const gallerySchema = mongoose.Schema({
   src: {
       type: String,
       required: true,
       default: "https://i.imgur.com/7LcVHFX.jpg"
   } 
});

var model = mongoose.model("gallery", gallerySchema);
module.exports = model;