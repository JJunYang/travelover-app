const express = require("express");
const router = express.Router();
const User = require("../models/user");
const Review = require("../models/review");
const Comment = require("../models/comment");

router.get("/:_id", async (req, res) => {
  try {
    const user = await User.findById(req.params._id);
    const reviewList = await Review.find({ "author._id": req.params._id });
    const commentList = await Comment.find({ "author._id": req.params._id });
    res.json({ user: user, reviewList: reviewList, commentList: commentList });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
