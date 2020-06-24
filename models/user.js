const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const UserSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  password: String,
  pic:String,
  email: { type: String, unique: true },
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
