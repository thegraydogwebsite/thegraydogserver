const mongoose = require("mongoose");

const slideshowSchema = mongoose.Schema({
   src: {
       type: String,
       required: true,
       default: "https://i.imgur.com/7LcVHFX.jpg"
   } 
});

var model = mongoose.model("slideshow", slideshowSchema);
module.exports = model;