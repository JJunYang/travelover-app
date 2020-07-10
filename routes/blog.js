const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Blog = require("../models/blog");
const { json } = require("body-parser");

router.get("/getCategoryNum", async (req, res) => {
  try {
    const result = [];
    const allblogs = await Blog.find();
    result.push({ category: "all", num: allblogs.length });
    const beachblogs = await Blog.find({
      type: { $elemMatch: { $eq: "beaches" } },
    });
    result.push({ category: "beaches", num: beachblogs.length });
    const stayblogs = await Blog.find({
      type: { $elemMatch: { $eq: "unique stay" } },
    });
    result.push({ category: "unique stay", num: stayblogs.length });
    const tipblogs = await Blog.find({
      type: { $elemMatch: { $eq: "tips & tricks" } },
    });
    result.push({ category: "tips & tricks", num: tipblogs.length });
    const breakblogs = await Blog.find({
      type: { $elemMatch: { $eq: "take a break" } },
    });
    result.push({ category: "take a break", num: breakblogs.length });
    const roadtripblogs = await Blog.find({
      type: { $elemMatch: { $eq: "road trips" } },
    });
    result.push({ category: "road trips", num: roadtripblogs.length });
    result.sort(function (a, b) {
      return b.num - a.num;
    });
    res.json(result);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
});

router.get("/getBlogs", async (req, res) => {
  try {
    const category = req.query.category;
    if (req.query.category === "all") {
      const blogs = await Blog.find();
      res.json(blogs);
    } else {
      const categoryblogs = await Blog.find({
        type: { $elemMatch: { $eq: category } },
      });
      res.json(categoryblogs);
    }
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
});

router.get("/getThreeBlogs", async (req, res) => {
  try {
    const blogs = await Blog.aggregate([{ $sample: { size: 3 } }]);
    res.json(blogs);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
});

router.get("/getDetails", async (req, res) => {
  try {
    const blog = await Blog.findById(req.query._id);
    const recommendBlog = await Blog.aggregate([
      { $match: { _id: { $ne: mongoose.Types.ObjectId(req.query._id) } } },
      { $sample: { size: 1 } },
    ]);
    var relatedBlogs = [];
    for (var i = 0; i < blog.type.length; i++) {
      var typeBlogs = await Blog.find({
        type: { $elemMatch: { $eq: blog.type[i] } },
        _id: { $ne: req.query._id },
      });
      relatedBlogs = relatedBlogs.concat(typeBlogs);
    }
    res.json({
      blog: blog,
      recommendBlog: recommendBlog,
      relatedBlogs: relatedBlogs,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
});

module.exports = router;
