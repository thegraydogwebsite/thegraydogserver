const mongoose = require("mongoose");

const staffSchema = mongoose.Schema({
   name: {
       type: String,
       required: true,
       default: "Name"
   },
   title: {
       type: String,
       required: true,
       default: "Title"
   },
   src: {
       type: String,
       required: true,
       default: "pic here"
   },
   text: {
       type: String,
       required: true,
       default: "This is my bio."
   }
});

var model = mongoose.model("staff", staffSchema);
module.exports = model;