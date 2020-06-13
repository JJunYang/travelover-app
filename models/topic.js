const mongoose = require("mongoose");
const TopicSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: {
    type: String,
    required: true,
  },
  tag: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  author: {
    id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    username: String,
  },
  comments: {
    type: Array,
    default: [],
  },
});

module.exports = mongoose.model("Topic", TopicSchema);
