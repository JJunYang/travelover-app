const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Topic = require("../models/topic");
const Comment = require("../models/comment");
const User = require("../models/user");
// const { json } = require("body-parser");

router.get("/getCategoryNum", async (req, res) => {
  try {
    const type = [
      "traveling with pets",
      "road trips",
      "honeymoons and romance",
      "family travel",
      "solo travel",
      "beaches",
      "winter sports",
      "destination weddings",
      "air travel",
      "bargain travel",
      "business travel",
      "food and travel",
      "cruises",
      "train travel",
    ];
    const result = [];
    const alltopics = await Topic.find();
    result.push({ category: "all", num: alltopics.length });
    for (var i = 0; i < type.length; i++) {
      const topics = await Topic.find({
        type: { $elemMatch: { $eq: type[i] } },
      });
      result.push({ category: type[i], num: topics.length });
    }
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
    const pList = topic.content.split("<br/>");
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
      pList: pList,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
});

router.get("/getCommentDetails/:_id", async (req, res) => {
  try {
    const foundComment = await Comment.findById(req.params._id);
    const foundUser = await User.findById(foundComment.author._id);
    const data = { comment: foundComment, author: foundUser };
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
});

module.exports = router;
