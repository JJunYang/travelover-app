const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const passport = require("passport");
const LocalStrategy = require("passport-local");
require("dotenv").config();
const User = require("./models/user");

//Connect to Mongo
mongoose
  .connect(process.env.DB_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.log(err);
  });

//Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Passport config
app.use(
  require("express-session")({
    secret: "I Love Husky",
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 60 * 60 * 1000 },
  })
);
app.use(passport.initialize());
app.use(passport.session());
// passport.use(new LocalStrategy(User.authenticate()));
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function (req, res, next) {
  res.locals.currentUser = req.user;
  next();
});

//Routes
app.use("/", require("./routes/index"));
app.use("/tickets", require("./routes/tickets"));
app.use("/add", require("./routes/add"));
app.use("/explore", require("./routes/explore"));
app.use("/journals", require("./routes/journals"));
app.use("/personalCenter", require("./routes/personalCenter"));
app.use("/topic", require("./routes/topic"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
//Serve listen
var PORT = process.env.PORT | 4000;
app.listen(PORT, console.log(`Server started on port ${PORT}`));
