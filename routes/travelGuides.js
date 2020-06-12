const express = require("express");
const router = express.Router();
const TravelGuide = require("../models/travelGuide");

//Create new travelguide
router.post("/create", async (req, res) => {
  try {
    const travelGuide = new TravelGuide({
      title: req.body.title,
      description: req.body.description,
      pic: req.body.pic,
      type: req.body.type,
      author: req.body.author,
      clickNum: req.body.clickNum,
      details: req.body.details,
      detailpics: req.body.detailpics,
    });
    const savedTravelGuide = await travelGuide.save();
    res.status(200).json({ code: 200, travelGuide: savedTravelGuide });
  } catch (error) {
    res.status(400).json({ des: error });
  }
});

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

//Add clickNum
router.put("/addClickNum", async (req, res) => {
  try {
    const { title, clickNum } = req.body;
    const changedNum = parseInt(clickNum) + 1;
    const travelGuide = await TravelGuide.updateOne(
      { title: title },
      { $set: { clickNum: changedNum } }
    );
    res.status(204).json(travelGuide);
  } catch (error) {
    res.status(401).json({ code: 401, err: error });
  }
});

//Cut clickNum
router.put("/cutClickNum", async (req, res) => {
  try {
    const { title, clickNum } = req.body;
    const changedNum = parseInt(clickNum) - 1;
    const travelGuide = await TravelGuide.updateOne(
      { title: title },
      { $set: { clickNum: changedNum } }
    );
    res.status(204).json(travelGuide);
  } catch (error) {
    res.status(401).json({ code: 401, err: error });
  }
});

module.exports = router;
