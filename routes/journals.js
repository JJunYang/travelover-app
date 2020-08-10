const express = require("express");
const router = express.Router();
const Journal = require("../models/journal");

//Get details by ID
router.get("/getdetails/:_id", async (req, res) => {
  try {
    const _id = req.params._id;
    const journal = await Journal.findById(_id);
    res.json(journal);
  } catch (error) {
    console.log(error);
  }
});

//Get all journals
router.get("/getAll", async (req, res) => {
  try {
    const journals = await Journal.find();
    res.json(journals);
  } catch (error) {
    res.json({ message: error });
  }
});

//Get all native journals
router.get("/getNative", async (req, res) => {
  try {
    const journals = await Journal.find({ type: "native" });
    res.json(journals);
  } catch (err) {
    res.json({ message: err });
  }
});

//Get all national journals
router.get("/getNational", async (req, res) => {
  try {
    const journals = await Journal.find({ type: "national" });
    res.json(journals);
  } catch (err) {
    res.json({ message: err });
  }
});

//Add likeNum
router.put("/addlikeNum", async (req, res) => {
  try {
    const { _id, likeNum } = req.body;
    const changedNum = parseInt(likeNum) + 1;
    const journal = await Journal.findByIdAndUpdate(
      { _id: _id },
      { $set: { likeNum: changedNum } }
    );
    res.status(204).json(journal);
  } catch (error) {
    res.status(401).json({ code: 401, err: error });
  }
});

//Cut likeNum
router.put("/cutlikeNum", async (req, res) => {
  try {
    const { _id, likeNum } = req.body;
    const changedNum = parseInt(likeNum) - 1;
    const journal = await Journal.findByIdAndUpdate(
      { _id: _id },
      { $set: { likeNum: changedNum } }
    );
    res.status(204).json(journal);
  } catch (error) {
    res.status(401).json({ code: 401, err: error });
  }
});

//add reviewsNum
router.put("/addViewNum", async (req, res) => {
  try {
    const { _id, viewNum } = req.body;
    const changedNum = parseInt(viewNum) + 1;
    const journal = await Journal.findByIdAndUpdate(
      { _id: _id },
      { $set: { viewNum: changedNum } }
    );
    res.status(204).json(journal);
  } catch (error) {
    res.status(401).json({ code: 401, err: error });
  }
});

//get three random journals
router.get("/getThreeJournals", async (req, res) => {
  try {
    const journals = await Journal.find();
    const result = [];
    var num = 4;
    for (var i = 0; i < num && journals.length > 0; i++) {
      var ran = Math.floor(Math.random() * journals.length);
      var journal=journals.splice(ran, 1)[0];
      result.push(journal);
    }
    res.json(result);
  } catch (error) {
    res.status(401).json({ code: 401, err: error });
  }
});

module.exports = router;
