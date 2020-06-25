const mongoose = require("mongoose");
const ReviewSchema = new mongoose.Schema({
  author: {
    _id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    username: String,
  },
  content: String,
  star: Number,
  place: {
    _id: { type: mongoose.Schema.Types.ObjectId, ref: "Place" },
    name: String,
  },
  date: { type: Date, default: Date.now() },
});
module.exports = mongoose.model("Review", ReviewSchema);
