const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const session = require("express-session");
const GitHubStrategy = require("passport-github").Strategy;
require('dotenv').config()
const path = require("path");
const port = process.env.port || 8000;


const app = express();

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: false,
      maxAge: 24 * 60 * 60 * 1000,
    },
  })
);

const passport = require("./middleware/passport");
const authRoute = require("./routes/authRoute");
const indexRoute = require("./routes/indexRoute");

// Middleware for express
app.use(express.json());
app.use(expressLayouts);
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
  console.log(`User details are: `);
  console.log(req.user);

  console.log("Entire session object:");
  console.log(req.session);

  console.log(`Session details are: `);
  console.log(req.session.passport);
  next();
});

app.use("/", indexRoute);
app.use("/auth", authRoute);

///
passport.serializeUser(function(user,cb)  {
   cb(null,user.id);
});

passport.deserializeUser(function(id,cb) {
  cb(null,id);
});

// I have github location working however, there is a bit error to it. I am trying yo fix as soon as possible.
passport.use(new GitHubStrategy({
  clientID: GITHUB_ID.process.env,
  clientSecret: GITHUB_SECRET.process.env,
  callbackURL: "http://localhost:8000/auth/github/callback"
},
function(accessToken, refreshToken, profile, done) {
  User.findOrCreate({ githubId: profile.id }, function (err, user) {
    return done(err, user);
  });
}
));
const isAuth = (req,res,next) => {
  if(req.user){
    next();
  } else{
    res.redirect('/login');
  }
}

app.get('/',isAuth, (req,res) => {
   res.sendFile(__dirname + './views/dashboard.ejs');
});

app.get('/login', (req,res) => {
  if(req.user){
    return res.redirect('/');
  }
  res.sendFile(__dirname + './routes/indexRoute.js');
});

app.get('/logout', (req,res) => {
  req.logOut();
  res.redirect("./routes/indexRoute.js")
});


app.get('/auth/github',passport.authenticate('github'));

app.get('/auth/github/callback', 
  passport.authenticate('github', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });



app.listen(port, () => {
  console.log(`🚀 Server has started on port ${port}`);
});
