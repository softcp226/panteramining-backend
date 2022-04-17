const mongoose = require("mongoose");
const connect = require("./dbConnector");
connect("connected to user database");

const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone_number: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  first_name: String,
  last_name: String,
  passport: String,
  password: String,
  balance:{
    type:Number,
    default:0
    
  }
});

const User = mongoose.model("user", userSchema);
module.exports = User;
