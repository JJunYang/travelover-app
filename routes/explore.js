const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const City = require("../models/city");
const Place = require("../models/place");
const Review = require("../models/review");
const User = require("../models/user");

//get all cities
router.get("/getAllCities", async (req, res) => {
  const cities = await City.find();
  res.json(cities);
});

//get city by id
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

//get place by id
router.get("/place/getPlaceById/:_id", async (req, res) => {
  try {
    const foundPlace = await Place.findById(req.params._id);
    const pList = foundPlace.introducing.split("<br/>");
    res.status(200).json({ place: foundPlace, pList: pList });
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
});

//get similar four places
router.get("/place/getSimilarPlaces", async (req, res) => {
  try {
    const place = await Place.findById(req.query._id);
    const places = await Place.find({
      category: place.category,
      city: place.city,
      _id: { $ne: place._id },
    });
    var fourSimilarPlaces = [];
    var num = 4;
    for (var i = 0; i < num && places.length > 0; i++) {
      var ran = Math.floor(Math.random() * places.length);
      fourSimilarPlaces.push(places.splice(ran, 1)[0]);
    }
    res.status(200).json(fourSimilarPlaces);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
});

//get  random four hotel
router.get("/place/getFourHotels", async (req, res) => {
  try {
    const allHotel = await Place.find({ category: "stay" });
    var fourRandomHotels = [];
    var num = 4;
    for (var i = 0; i < num && allHotel.length > 0; i++) {
      var ran = Math.floor(Math.random() * allHotel.length);
      fourRandomHotels.push(allHotel.splice(ran, 1)[0]);
    }
    res.status(200).json(fourRandomHotels);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
});

//get place number by category
router.get("/place/getPlaceNumByCategory", async (req, res) => {
  try {
    const foundSeePlaces = await Place.find({ category: "see & do" });
    const foundFoodPlaces = await Place.find({ category: "food & drink" });
    const foundStayPlaces = await Place.find({ category: "stay" });
    const data = [
      { category: "see & do", num: foundSeePlaces.length, abbr: "see" },
      { category: "food & drink", num: foundFoodPlaces.length, abbr: "food" },
      { category: "stay", num: foundStayPlaces.length, abbr: "stay" },
    ];
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
});

router.get("/place/getPlacesByCategory/:category", async (req, res) => {
  try {
    const foundPlaces = await Place.find({ category: req.params.category });
    res.status(200).json(foundPlaces);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
});

//get review details
router.get("/review/details/:_id", async (req, res) => {
  try {
    const foundReview = await Review.findById(req.params._id);
    const foundAuther = await User.findById(foundReview.author._id);
    const data = { review: foundReview, author: foundAuther };
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
});

module.exports = router;
