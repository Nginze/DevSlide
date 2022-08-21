const express = require("express");
const app = express();
require("./db/config");
const userRoutes = require("./routes/usersRoutes");
const authRoutes = require("./routes/authRoutes");
const profileRoutes = require("./routes/profileRoutes");
const timeLineRoutes = require("./routes/timeLineRoutes");
const interactionRoutes = require("./routes/interactionRoutes");
const searchRoutes = require("./routes/searchRoutes");
const session = require("express-session");
var FileStore = require("session-file-store")(session);
const cors = require("cors");
const passport = require("passport");
app.use( 
  session({
    store: new FileStore(),
    secret: "secret",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 180 * 60 * 1000 },
  })
);

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));

app.get("/", (req, res) => {
  console.log(req.isAuthenticated());
  console.log(req.user);
  res.send("Welcome to harper Api");
});
app.use("/user", userRoutes);
app.use("/auth", authRoutes);
app.use("/profile", profileRoutes);
app.use("/timeline", timeLineRoutes);
app.use("/interact", interactionRoutes);
app.use("/search", searchRoutes);
app.listen(5000, err => {
  if (err) {
    console.log(err);
  } else {
    console.log("server listening");
  }
});
