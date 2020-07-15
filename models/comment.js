const mongoose = require("mongoose");
const CommentSchema = new mongoose.Schema({
  author: {
    _id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    username: String,
  },
  content: String,
  topic: {
    _id: { type: mongoose.Schema.Types.ObjectId, ref: "Topic" },
    name: String,
  },
  date: { type: Date, default: Date.now() },
});
module.exports = mongoose.model("Comment", CommentSchema);
