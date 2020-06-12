const mongoose = require("mongoose");
const HotelSchema = new mongoose.Schema({
  hotelId: {
    type: String,
    required: true,
  },
  hotelName: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image:{
    type:[],
    default:[]
  }
});

module.exports = mongoose.model("Hotel", HotelSchema);
