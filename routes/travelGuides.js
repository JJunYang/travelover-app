const express = require("express");
const router = express.Router();
const TravelGuide = require("../models/travelGuide");

//Get details by ID
router.get("/details/:_id", async (req, res) => {
  try {
    const _id = req.params._id;
    const travelGuide = await TravelGuide.findById(_id);
    res.json(travelGuide);
  } catch (error) {
    console.log(error);
  }
});

//Get all travelguides
router.get("/getAll", async (req, res) => {
  try {
    const travelGuides = await TravelGuide.find();
    res.json(travelGuides);
  } catch (error) {
    res.json({ message: error });
  }
});

//Get all native travelguides
router.get("/getNative", async (req, res) => {
  try {
    const travelGuides = await TravelGuide.find({ type: "native" });
    res.json(travelGuides);
  } catch (err) {
    res.json({ message: err });
  }
});

//Get all national travelguides
router.get("/getNational", async (req, res) => {
  try {
    const travelGuides = await TravelGuide.find({ type: "national" });
    res.json(travelGuides);
  } catch (err) {
    res.json({ message: err });
  }
});

//Add likeNum
router.put("/addlikeNum", async (req, res) => {
  try {
    const { title, likeNum } = req.body;
    const changedNum = parseInt(likeNum) + 1;
    const travelGuide = await TravelGuide.updateOne(
      { title: title },
      { $set: { likeNum: changedNum } }
    );
    res.status(204).json(travelGuide);
  } catch (error) {
    res.status(401).json({ code: 401, err: error });
  }
});

//Cut likeNum
router.put("/cutlikeNum", async (req, res) => {
  try {
    const { title, likeNum } = req.body;
    const changedNum = parseInt(likeNum) - 1;
    const travelGuide = await TravelGuide.updateOne(
      { title: title },
      { $set: { likeNum: changedNum } }
    );
    res.status(204).json(travelGuide);
  } catch (error) {
    res.status(401).json({ code: 401, err: error });
  }
});

module.exports = router;
