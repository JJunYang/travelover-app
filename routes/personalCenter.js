const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.get("/:_id", async (req, res) => {
  try {
    const user = await User.findById(req.params._id);
    res.json(user);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
