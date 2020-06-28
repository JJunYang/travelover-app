const express = require("express");
const router = express.Router();
const City = require("../models/city");
const Place = require("../models/place");

router.get("/getAllCities", async (req, res) => {
  const cities = await City.find();
  res.json(cities);
});

router.get("/city/:name&:_id", async (req, res) => {
  try {
    const city = req.params.name;
    const cityId = req.params._id;
    const foundCity = await City.findById(cityId);
    const foodList = await Place.find({
      "city._id": cityId,
      category: "food & drink",
    });
    const seeList = await Place.find({
      "city._id": cityId,
      category: "see & do",
    });
    const stayList = await Place.find({ "city._id": cityId, category: "stay" });
    const allCities = await City.find();
    const cityList = [];
    for (var i = 0; i < allCities.length; i++) {
      if (cityList.length >= 4) {
        break;
      }
      if (allCities[i]._id.toString() !== cityId.toString()) {
        cityList.push(allCities[i]);
      }
    }
    const data = {
      city: foundCity,
      cityList: cityList,
      foodList: foodList,
      seeList: seeList,
      stayList: stayList,
    };
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
});

router.get("/city/:_id/otherFour", async (req, res) => {
  try {
    const cityId = req.params._id;
    console.log(cityId);

    const foundCity = await City.find();
    const cityList = [];
    for (var i = 0; i < foundCity.length; i++) {
      if (cityList.length < 4) {
        if (foundCity[i]._id.toString() !== cityId.toString()) {
          cityList.push(foundCity[i]);
        }
      }
    }
    res.status(200).json(cityList);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
});

router.get("/place/:_id", async (req, res) => {
  try {
    const foundPlace = await Place.findById(req.params._id);
    res.status(200).json(foundPlace);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
});

module.exports = router;
