const express = require("express");
const router = express.Router();
const Topic = require("../models/topic");

router.get("/", async (req, res) => {
  const topics = await Topic.find();
  res.json(topics);
  // res.sendStatus(200);
});

router.post("/postTopic", (req, res) => {
  try {
    const { title, description, tag, author } = req.body;
    const topic = new Topic({
      title: title,
      description: description,
      tag: tag,
      author: author,
    });
    topic.save();
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
  }
});

router.get("/topicDetail/:topicId", async (req, res) => {
  const topic = await Topic.findById(req.params.topicId);
  res.json(topic);
});

router.put("/topicDetail/:topicId", async (req, res) => {
  console.log(req.params.topicId);

  try {
    const topic = await Topic.findById(req.params.topicId);
    const { userId, comment,userName } = req.body;
    topic.comments.push({
      userId: userId,
      userName:userName,
      comment: comment,
      date: new Date(),
    });
    await topic.save();
    res.send(topic);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
