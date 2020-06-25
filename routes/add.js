const express = require("express");
const router = express.Router();
const Country = require("../models/country");
const City = require("../models/city");
const Place = require("../models/place");
const Review = require("../models/review");
const User = require("../models/user");

//add country
router.post("/newCountry", async (req, res) => {
  const { name } = req.body;
  try {
    var newCountry = new Country({
      name: name,
      cityList: [],
    });
    await newCountry.save();
    res.sendStatus(202);
  } catch (error) {
    res.status(400).json(error);
  }
});

//add city
router.post("/newCity", async (req, res) => {
  const {
    name,
    representPic,
    country,
    currency,
    language,
    introducing,
    bestTimeVisit,
  } = req.body;
  try {
    var newCity = new City({
      name: name,
      representPic: representPic,
      country: country,
      currency: currency,
      language: language,
      introducing: introducing,
      bestTimeVisit: bestTimeVisit,
    });
    const foundCountry = await Country.find({ name: country });
    if (foundCountry.length < 1) {
      res.Status(400).json({ message: "No Country Found " });
    } else {
      await newCity.save();
      foundCountry[0].cityList.push(newCity);
      await foundCountry[0].save();
      res.sendStatus(202);
    }
  } catch (error) {
    res.status(400).json(error);
  }
});

//add place
router.post("/newPlace", async (req, res) => {
  const {
    name,
    city,
    category,
    type,
    cost,
    introducing,
    openingHour,
    contact,
  } = req.body;
  try {
    var newPlace = new Place({
      name: name,
      city: city,
      category: category,
      type: type,
      cost: cost,
      introducing: introducing,
      openingHour: openingHour,
      contact: contact,
      reviewList: [],
      reviewStar: 0,
    });
    const foundCity = await City.find({ name: city });
    if (foundCity.length < 1) {
      res.Status(400).json({ message: "No City Found " });
    } else {
      await newPlace.save();
      foundCity[0].placeList.push(newPlace);
      const changedNum = parseInt(foundCity[0].placeNum) + 1;
      await foundCity[0].save();
      await City.updateOne({ name: city }, { $set: { placeNum: changedNum } });
      res.sendStatus(202);
    }
  } catch (error) {
    res.status(400).json(error);
  }
});

//add review
router.post("/newReview", async (req, res) => {
  const { author, content, star, place } = req.body;
  try {
    var newReview = new Review({
      author: author,
      content: content,
      star: star,
      place: place,
    });
    const foundPlace = await Place.findById(place._id);
    const user = await User.findById(author._id);
    foundPlace.reviewList.push(newReview);
    user.reviewList.push(newReview);
    var reviewNum = parseInt(foundPlace.reviewNum) + 1;
    var reviewScore = parseInt(foundPlace.reviewScore) + star;
    var reviewStar = reviewScore / reviewNum;
    await Place.updateOne(
      { _id: place._id },
      {
        $set: {
          reviewNum: reviewNum,
          reviewScore: reviewScore,
          reviewStar: reviewStar,
        },
      }
    );
    await user.save();
    await foundPlace.save();
    await newReview.save();
    res.sendStatus(202);
  } catch (error) {
    res.status(400).json(error);
  }
});
module.exports = router;
