const express = require("express");
const router = express.Router();
const Flight = require("../models/flight");
const Bus = require("../models/bus");
const Hotel = require("../models/hotel");

router.post("/flight", async (req, res) => {
  const { flightId, from, to, date, price } = req.body;

  try {
    var newFlight = new Flight({
      flightId: flightId,
      from: from,
      to: to,
      date: date,
      price: price,
    });
    await newFlight.save();
    res.sendStatus(200);
  } catch (error) {
    res.status(400).json(error);
  }
});

router.post("/bus", async (req, res) => {
  //console.log(req.body);
  const { busId, from, to, date, price } = req.body;

  try {
    var newBus = new Bus({
      busId: busId,
      from: from,
      to: to,
      date: date,
      price: price,
    });
    await newBus.save();
    res.sendStatus(200);
  } catch (error) {
    res.status(400).json(error);
  }
});

router.post("/hotel", isLoggedIn, async (req, res) => {
  const { hotelId, hotelName, location, price } = req.body;
  try {
    const newHotel = new Hotel({
      hotelId: hotelId,
      hotelName: hotelName,
      location: location,
      price: price,
    });

    await newHotel.save();
    res.sendStatus(200);
  } catch (error) {
    res.status(400).json(error);
  }
});

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  return res.json({ message: "loggin first" });
}

module.exports = router;
