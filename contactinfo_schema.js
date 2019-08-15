const mongoose = require("mongoose");

const contactinfoSchema = mongoose.Schema({
   phone: {
       type: String,
       required: true,
       default: "https://i.imgur.com/7LcVHFX.jpg"
   },
   address: {
       type: String,
       required: true,
       default: "UNKNOWN"
   },
   hours: {
       type: String,
       required: true,
       default: "UNKNOWN"
   },
   facebook: {
       type: String,
       required: true,
       default: "UNKNOWN"
   },
   instagram: {
       type: String,
       required: true,
       default: "UNKNOWN"
   }
});

var model = mongoose.model("contactinfo", contactinfoSchema);
module.exports = model;