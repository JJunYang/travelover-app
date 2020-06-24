const mongoose = require("mongoose");
const ReviewSchema = new mongoose.Schema({
  author: {
    _id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    name: String,
  },
  content: String,
  date: { type: Date, default: Date.now() },
});
module.exports = mongoose.model("Review", ReviewSchema);
