const mongoose = require("mongoose");
const PlaceSchema = new mongoose.Schema({
  name: String,
  city: {
    _id: { type: mongoose.Schema.Types.ObjectId, ref: "City" },
    name: String,
  },
  category: String,
  type: String,
  cost: String,
  pics: [],
  introducing: String,
  openingHour: {
    Monday: { from: String, to: String },
    Tuesday: { from: String, to: String },
    Wednesday: { from: String, to: String },
    Thursday: { from: String, to: String },
    Friday: { from: String, to: String },
    Saturday: { from: String, to: String },
    Sunday: { from: String, to: String },
  },
  contact: {
    address: String,
    phone: String,
    website: String,
  },
  reviewList: [
    {
      _id: { type: mongoose.Schema.Types.ObjectId, ref: "Review" },
      author: {
        _id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        username: String,
      },
    },
  ],
  reviewNum: { type: Number, default: 0 },
  reviewScore: { type: Number, default: 0 },
  reviewStar: { type: Number, default: 0 },
});
module.exports = mongoose.model("Place", PlaceSchema);
