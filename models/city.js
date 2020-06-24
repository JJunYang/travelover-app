const mongoose = require("mongoose");
const CitySchema = new mongoose.Schema({
  name: String,
  representPic: String,
  country: String,
  currency: String,
  language: String,
  introducing: String,
  placeNum: { type: Number, default: 0 },
  bestTimeVisit: String,
  placeList: [
    {
      _id: { type: mongoose.Schema.Types.ObjectId, ref: "Place" },
      name: String,
    },
  ],
});
module.exports = mongoose.model("City", CitySchema);
