const express = require("express");
const router = express.Router();
const GroupTour = require("../models/groupTour");
const User = require("../models/user");

//Get all groupTours
router.get("/", async (req, res) => {
  const data = await GroupTour.find().sort({ _id: -1 });
  res.json(data);
});

//Create new groupTour
router.post("/create", async (req, res) => {
  const { title, details, img, price, date } = req.body;
  if (!title || !details) {
    res.send(400);
  } else {
    const newGrouptour = new GroupTour({
      title: title,
      details: details,
      img: img,
      price: price,
      date: date,
    });
    newGrouptour.save();
    res.send(200);
  }
});

router.put("/:userId/:tourId", async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    const groupTour = await GroupTour.findById(req.params.tourId);
    user.groupTourList.push(groupTour);
    await user.save();
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
  }
});

router.get("/:_id", async (req, res) => {
  try {
    const _id = req.params._id;

    const groupTour = await GroupTour.findById(_id);
    res.json(groupTour);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
