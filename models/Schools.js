const mongoose = require("mongoose");

const SchoolSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  }, 
  
  is_registered: {
    type: Boolean,
    default: false,
  }
});

module.exports = mongoose.model("Schools", SchoolSchema)
