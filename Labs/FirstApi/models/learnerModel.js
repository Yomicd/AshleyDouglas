// IMPORT MONGOOSE IN ORDER TO CREATE A SCHEMA
const mongoose = require("mongoose");

// Create our learner schema
const learnerSchema = new mongoose.Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
  },
  age: {
    type: Number,
  },
  location: {
    type: String,
  },
  courses: {
    type: [String],
  },
});

//  Lets FINALLYYYYYYYY!!!!! CREATE OUR MODEL
const Learner = mongoose.model("Learner", learnerSchema);

//EXPORT OUR LEAR
module.exports = Learner;