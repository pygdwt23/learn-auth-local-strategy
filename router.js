const router = require("express").Router();

const passport = require("passport");
const auth = require("./controllers/authController");
const restrict = require("./middlewares/restrict");

router.get("/", restrict, (req, res) => res.render("index"));

router.get("/", (req, res) => res.render("index"));

router.get("/register", (req, res) => res.render("register"));
router.post("/register", auth.register);

router.get("/login", (req, res) => res.render("login"));
router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
    failureFlash: true,
  })
);

router.get("/whoami", restrict, auth.whoami);

router.get("/logout", auth.logout);

module.exports = router;
