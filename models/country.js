const mongoose = require("mongoose");
const CountrySchema = new mongoose.Schema({
  name: String,
  pic: String,
  cityList: [
    {
      _id: { type: mongoose.Schema.Types.ObjectId, ref: "City" },
      name: String,
    },
  ],
});
module.exports = mongoose.model("Country", CountrySchema);
