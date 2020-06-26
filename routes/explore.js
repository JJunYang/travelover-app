const express = require("express");
const router = express.Router();
const City = require("../models/city");

router.get("/getAllCities", async (req, res) => {
  const cities = await City.find();
  res.json(cities);
});

router.get("/city/:name&:_id", async (req, res) => {
  try {
    const city = req.params.name;
    const cityId = req.params._id;
    const foundCity = await City.findById(cityId);
    res.json(foundCity);
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
});

module.exports = router;
