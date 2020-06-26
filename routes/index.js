const express = require("express");
const router = express.Router();
const passport = require("passport");
const User = require("../models/user");

router.post("/register", (req, res) => {
  //   console.log(req.body);
  var newUser = new User({
    username: req.body.username,
    email: req.body.email,
    reviewList: [],
  });
  User.register(newUser, req.body.password, (err, user) => {
    if (err) {
      if (err.name === "UserExistsError") {
        return res.status(400).json({ message: err.message });
      } else if (err.name === "MongoError") {
        return res
          .status(400)
          .json({ message: "Your email has been registered!" });
      }
      return res
        .status(500)
        .json({ message: err || "somthing wrong with server" });
    }
    req.logIn(user, function (error) {
      return res.json(user);
    });
  });
});

router.post("/login", function (req, res, next) {
  passport.authenticate("local", function (error, user, info) {
    if (error) {
      return res.status(500).json({
        message: "Something wrong happend to server",
      });
    }
    req.logIn(user, function (error) {
      if (error) {
        return res.status(404).json({
          message: "Incorrect username or password",
        });
      }
      res.json(user);
    });
  })(req, res, next);
});

router.get("/api", isLoggedIn, (req, res) => {
  res.json({
    message: "hello",
    user: req.user,
  });
});

router.get("/logout", (req, res) => {
  req.logout();
  res.json({ message: "success logout" });
});

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  return res.json({ message: "loggin first" });
}

module.exports = router;
