const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Topic = require("../models/topic");
// const { json } = require("body-parser");

router.get("/getCategoryNum", async (req, res) => {
  try {
    const result = [];
    const alltopics = await Topic.find();
    result.push({ category: "all", num: alltopics.length });
    const beachtopics = await Topic.find({
      type: { $elemMatch: { $eq: "beaches" } },
    });
    result.push({ category: "beaches", num: beachtopics.length });
    const staytopics = await Topic.find({
      type: { $elemMatch: { $eq: "unique stay" } },
    });
    result.push({ category: "unique stay", num: staytopics.length });
    const tiptopics = await Topic.find({
      type: { $elemMatch: { $eq: "tips & tricks" } },
    });
    result.push({ category: "tips & tricks", num: tiptopics.length });
    const breaktopics = await Topic.find({
      type: { $elemMatch: { $eq: "take a break" } },
    });
    result.push({ category: "take a break", num: breaktopics.length });
    const roadtriptopics = await Topic.find({
      type: { $elemMatch: { $eq: "road trips" } },
    });
    result.push({ category: "road trips", num: roadtriptopics.length });
    result.sort(function (a, b) {
      return b.num - a.num;
    });
    res.json(result);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
});

router.get("/getTopics", async (req, res) => {
  try {
    const category = req.query.category;
    if (req.query.category === "all") {
      const topics = await Topic.find();
      res.json(topics);
    } else {
      const categorytopics = await Topic.find({
        type: { $elemMatch: { $eq: category } },
      });
      res.json(categorytopics);
    }
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
});

router.get("/getThreeTopics", async (req, res) => {
  try {
    const topics = await Topic.aggregate([{ $sample: { size: 3 } }]);
    res.json(topics);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
});

router.get("/getDetails", async (req, res) => {
  try {
    const topic = await Topic.findById(req.query._id);
    const recommendTopic = await Topic.aggregate([
      { $match: { _id: { $ne: mongoose.Types.ObjectId(req.query._id) } } },
      { $sample: { size: 1 } },
    ]);
    var relatedTopics = [];
    for (var i = 0; i < topic.type.length; i++) {
      var typeTopics = await Topic.find({
        type: { $elemMatch: { $eq: topic.type[i] } },
        _id: { $ne: req.query._id },
      });
      relatedTopics = relatedTopics.concat(typeTopics);
    }
    var threeRelatedTopics = [];
    var num = 3;
    for (var i = 0; i < num && relatedTopics.length > 0; i++) {
      var ran = Math.floor(Math.random() * relatedTopics.length);
      threeRelatedTopics.push(relatedTopics.splice(ran, 1)[0]);
    }
    res.json({
      topic: topic,
      recommendTopic: recommendTopic,
      relatedTopics: threeRelatedTopics,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
});

module.exports = router;
