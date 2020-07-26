var middlewareObj = {};
middlewareObj.isLoggedIn = function (req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  return res.json({ message: "loggin first" });
};

module.exports = middlewareObj;
