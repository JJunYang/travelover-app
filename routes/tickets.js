const express = require("express");
const router = express.Router();
const Flight = require("../models/flight");
const User = require("../models/user");

//Find Flights
router.get("/getFlight", async (req, res) => {
  const from = req.query.from;
  const to = req.query.to;
  if (from === "" && to === "") {
    const data = await Flight.find();
    res.json(data);
  } else if (from === "") {
    const data = await Flight.find({ to: to.toLowerCase() });
    res.json(data);
  } else if (to === "") {
    const data = await Flight.find({ from: from.toLowerCase() });
    res.json(data);
  } else {
    const data = await Flight.find({
      from: from.toLowerCase(),
      to: to.toLowerCase(),
    });
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

module.exports = router;
