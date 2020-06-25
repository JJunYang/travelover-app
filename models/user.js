const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const UserSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  password: String,
  pic: String,
  email: { type: String, unique: true },
  reviewList: [
    {
      _id: { type: mongoose.Schema.Types.ObjectId, ref: "Review" },
      place: {
        _id: { type: mongoose.Schema.Types.ObjectId, ref: "Place" },
        name: String,
      },
    },
  ],
  flightList: {
    type: Array,
    default: [],
  },
  hotelList: {
    type: Array,
    default: [],
  },
});

UserSchema.plugin(passportLocalMongoose, { usernameField: "email" });

module.exports = mongoose.model("User", UserSchema);
