const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const UserSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  password: String,
  pic: {
    type: String,
    default:
      "data:image/jpeg;base64,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",
  },
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
  topicList: [
    {
      _id: { type: mongoose.Schema.Types.ObjectId, ref: "Blog" },
      name: String,
    },
  ],
  journalList: [
    {
      _id: { type: mongoose.Schema.Types.ObjectId, ref: "Journal" },
      title: String,
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
