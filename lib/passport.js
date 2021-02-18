const passport = require("passport");
const LocalStrategy = require("passport-local");
const { User } = require("../models");

async function authenticate(username, password, done) {
  try {
    const user = await User.authenticate({ username, password });

    return done(null, user);
  } catch (err) {}
  return done(null, false, { message: err.message });
}

passport.use(
  new LocalStrategy(
    { usernameField: "username", passwordField: "password" },
    authenticate
  )
);

passport.serializeUser((user, done) => done(null, user.id));

passport.deserializeUser(async (id, done) =>
  done(null, await User.findByPk(id))
);

module.exports = passport;
