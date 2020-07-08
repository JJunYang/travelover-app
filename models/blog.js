const mongoose = require("mongoose");
const BlogSchema = new mongoose.Schema({
  name: String,
  type: [],
  pic: String,
  date: { type: Date, default: Date.now() },
  author: {
    _id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    username: String,
  },
  content: [{ content: String, pic: String }],
  commentList: [
    {
      _id: { type: mongoose.Schema.Types.ObjectId, ref: "Comment" },
      author: {
        _id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        username: String,
      },
    },
  ],
  commentNum: { type: Number, default: 0 },
});
module.exports = mongoose.model("Blog", BlogSchema);
