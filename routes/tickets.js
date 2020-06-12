const express = require("express");
const router = express.Router();
const Flight = require("../models/flight");
const Bus = require("../models/bus");
const Hotel = require("../models/hotel");
const User = require("../models/user");

// Add New Flight
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

//Find Flights
router.get("/flight", async (req, res) => {
  const from = req.query.from;
  const to = req.query.to;

  if (from === "" && to === "") {
    const data = await Flight.find();
    res.json(data);
  } else if (from === "") {
    const data = await Flight.find({ to: to });
    res.json(data);
  } else if (to === "") {
    const data = await Flight.find({ from: from });
    res.json(data);
  } else {
    const data = await Flight.find({ from: from, to: to });
    res.json(data);
  }
});

//Find flight by id
router.get("/flight/:_id", async (req, res) => {
  const _id = req.params._id;
  const foundFlight = await Flight.findById(_id);
  res.json(foundFlight);
});

//Book flight
router.put("/flight/:userId/:flightId", async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    const flight = await Flight.findById(req.params.flightId);
    user.flightList.push(flight);
    await user.save();
    res.sendStatus(204);
  } catch (error) {
    console.log(error);
  }
});

//Add New Bus
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

//find bus
router.get("/bus", async (req, res) => {
  const from = req.query.from;
  const to = req.query.to;

  if (from === "" && to === "") {
    const data = await Bus.find();
    res.json(data);
  } else if (from === "") {
    const data = await Bus.find({ to: to });
    res.json(data);
  } else if (to === "") {
    const data = await Bus.find({ from: from });
    res.json(data);
  } else {
    const data = await Bus.find({ from: from, to: to });
    res.json(data);
  }
});

//Find bus by id
router.get("/bus/:_id", async (req, res) => {
  const _id = req.params._id;
  const foundBus = await Bus.findById(_id);
  res.json(foundBus);
});

//Book bus
router.put("/bus/:userId/:busId", async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    const bus = await Bus.findById(req.params.busId);
    user.busList.push(bus);
    await user.save();
    res.sendStatus(204);
  } catch (error) {
    console.log(error);
  }
});

//Add New Hotel
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

//Get all hotel
router.get("/hotel", async (req, res) => {
  const foundHotels = await Hotel.find();
  res.json(foundHotels);
});

//Find hotel by id
router.get("/hotel/:_id", async (req, res) => {
  const _id = req.params._id;
  const foundHotel = await Hotel.findById(_id);
  res.json(foundHotel);
});

//Book hotel
router.put("/hotel/:userId/:hotelId", async (req, res) => {

  try {
    const user = await User.findById(req.params.userId);
    const hotel = await Hotel.findById(req.params.hotelId);
    user.hotelList.push(hotel);
    await user.save();
    res.sendStatus(204);
  } catch (error) {
    console.log(error);
  }
});

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  return res.json({ message: "loggin first" });
}

module.exports = router;
