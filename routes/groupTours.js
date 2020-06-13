const express = require("express");
const router = express.Router();
const GroupTour = require("../models/groupTour");

router.get("/", async (req, res) => {
  const data = await GroupTour.find().sort({ _id: -1 });
  res.json(data);
});

module.exports = router;
