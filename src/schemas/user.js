const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    nickName: {
      type: String,
      default: "",
      unique: true,
    },
     },
  { versionKey: false, timestamps: true }
);

const User = mongoose.model("users", schema);

module.exports = {
  User,
};
