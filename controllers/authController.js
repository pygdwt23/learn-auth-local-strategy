const { User } = require("../models");
const passport = require("../lib/passport");

module.exports = {
  register: (req, res, next) => {
    User.register(req.body)
      .then(() => {
        res.redirect("/login");
      })
      .catch((err) => next(err));
  },

  // login: passport.authenticate('local')
  whoami: (req, res) => {
    res.render("profile", req.user.dataValues);
  },

  logout: (req, res) => {
    req.logout();
    res.redirect("/login");
  },
};
