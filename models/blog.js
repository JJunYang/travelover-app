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
  content: [{ content: String, pic: String, title: String }],
});
module.exports = mongoose.model("Blog", BlogSchema);
