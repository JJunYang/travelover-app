const express = require("express");
const router = express.Router();
const Country = require("../models/country");
const City = require("../models/city");
const Place = require("../models/place");
const Review = require("../models/review");
const User = require("../models/user");
const Blog = require("../models/blog");
const Journal = require("../models/journal");

//add country
router.post("/newCountry", async (req, res) => {
  const { name, pic } = req.body;
  try {
    var newCountry = new Country({
      name: name,
      pic: pic,
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
    cardPic,
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
      cardPic: cardPic,
      country: country,
      currency: currency,
      language: language,
      introducing: introducing,
      bestTimeVisit: bestTimeVisit,
    });
    const foundCountry = await Country.findById(country._id);
    if (foundCountry) {
      await newCity.save();
      foundCountry.cityList.push(newCity);
      await foundCountry.save();
      res.sendStatus(202);
    } else {
      res.Status(400).json({ message: "No Country Found " });
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
    pics,
    introducing,
    openingHour,
    contact,
  } = req.body;
  try {
    var newPlace = new Place({
      name: name,
      city: city,
      pics: pics,
      category: category,
      type: type,
      cost: cost,
      introducing: introducing,
      openingHour: openingHour,
      contact: contact,
      reviewList: [],
      reviewStar: 0,
    });
    const foundCity = await City.findById(city._id);
    if (foundCity) {
      await newPlace.save();
      foundCity.placeList.push(newPlace);
      const changedNum = parseInt(foundCity.placeNum) + 1;
      await foundCity.save();
      await City.updateOne(
        { _id: city._id },
        { $set: { placeNum: changedNum } }
      );
      res.sendStatus(202);
    } else {
      res.Status(400).json({ message: "No City Found " });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
});

//add review
router.post("/newReview", isLoggedIn, async (req, res) => {
  const { content, star, place } = req.body;
  const author = { _id: req.user._id, username: req.user.username };
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
    var reviewScore = parseInt(foundPlace.reviewScore) + parseInt(star);
    var reviewStar = (reviewScore / reviewNum).toFixed(1);
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

//add blog
router.post("/newBlog", async (req, res) => {
  const { name, author, type, pic, content } = req.body;
  try {
    var newBlog = new Blog({
      name: name,
      author: author,
      type: type,
      pic: pic,
      content: content,
    });
    const user = await User.findById(author._id);
    user.blogList.push(newBlog);
    await user.save();
    await newBlog.save();
    res.status(202).json(newBlog);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
});

//add journal
router.post("/newJournal", isLoggedIn, async (req, res) => {
  const author = {
    _id: req.user._id,
    username: req.user.username,
    pic: req.user.pic,
  };
  try {
    const journal = new Journal({
      title: req.body.title,
      pic: req.body.pic,
      type: req.body.type,
      author: author,
      likeNum: req.body.likeNum,
      details: req.body.details,
      schedule: req.body.schedule,
      content: req.body.content,
    });
    const user = await User.findById(author._id);
    user.journalList.push(journal);
    const savedjournal = await journal.save();
    await user.save();
    res.status(200).json({ code: 200, journal: savedjournal });
  } catch (error) {
    console.log(error);
    res.status(400).json({ des: error });
  }
});

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  return res.json({ message: "loggin first" });
}
module.exports = router;
