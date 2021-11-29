const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  userName: String,
  emailID: String,
  password: String,
  mobile: String,
  githubLink: String,
  bio: String,
  gender: String,
});

module.exports = mongoose.model("User", userSchema);
