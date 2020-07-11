const mongoose = require("mongoose");
const TravelGuide = mongoose.Schema({
  title: {
    type: String,
    required: "title can't be empty",
  },
  pic: String,
  type: {
    type: String,
    required: "type can't be empty",
  },
  author: {
    _id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    username: String,
  },
  likeNum: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    required: true,
    default: Date.now,
  },
  details: {
    type: Object,
    required: "details can't be empty",
  },
  schedule: [],
  content: [{ content: String, pic: String, title: String }],
});

module.exports = mongoose.model("TravelGuide", TravelGuide);
