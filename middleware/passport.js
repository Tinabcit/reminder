const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const userController = require("../controllers/userController");
const localLogin = new LocalStrategy(
  {
    usernameField: "email",
    passwordField: "password",
  },
  (email, password, done) => {
    // Check if User exists in the database
    const user = userController.getUserByEmailIdAndPassword(email, password);
    return user
      ? done(null, user)
      : done(null, false, {
          message: "Your login details are not valid. Please try again",
        });
  }
);

// req.session.passport.user
passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (email, done) {
  let user = userController.getUserById(email);
  if (user) {
    done(null, user);
  } else {
    done({ message: "User not found" }, null);
  }
});



module.exports = passport.use(localLogin);

