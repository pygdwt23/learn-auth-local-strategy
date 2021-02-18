const express = require("express");
const app = express();
const session = require("express-session");
const flash = require("express-flash");

app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: "Rahasia",
    resave: false,
    saveUninitialized: false,
  })
);

const passport = require("./lib/passport");
app.use(passport.initialize());
app.use(passport.session());

app.use(flash());

app.set("view engine", "ejs");

const router = require("./router");
app.use(router);
app.listen(8000, () => {
  console.log("Server nyala pada port 8000!");
});
