const mongoose = require("mongoose");
const TravelGuide = mongoose.Schema({
  title: {
    type: String,
    required: "title can't be empty",
  },
  description: {
    type: String,
    required: "description can't be empty",
  },
  pic: {
    type: Array,
    required: "pic can't be empty",
  },
  type: {
    type: String,
    required: "type can't be empty",
  },
  author: {
    id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    username: String,
  },
  clickNum: {
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
  detailpics: {
    type: Array,
    required: "detailpics can't be empty",
  },
});

module.exports = mongoose.model("TravelGuide", TravelGuide);
