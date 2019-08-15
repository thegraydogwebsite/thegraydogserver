const mongoose = require("mongoose");

const headgroomerSchema = mongoose.Schema({
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
   }
});

var model = mongoose.model("headgroomer", headgroomerSchema);
module.exports = model;