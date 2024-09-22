const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: ture,
    unique: true,
  },
  email: {
    type: String,
    required: ture,
    unique: true,
  },
  password: {
    type: String,
    required: ture,
  },
  role: {
    type: String,
    default: user,
  },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
