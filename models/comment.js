const mongoose = require("mongoose");
const CommentSchema = mongoose.Schema({
  author: {
    _id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    username: String,
  },
  content: String,
  date: { type: Date, default: Date.now() },
  blog: {
    _id: { type: mongoose.Schema.Types.ObjectId, ref: "Blog" },
    name: String,
  },
});
module.exports = mongoose.model("Comment", CommentSchema);
