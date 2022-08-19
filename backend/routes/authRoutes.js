require("dotenv").config();
require("../services/GitHubAuth");
const { Router } = require("express");
const router = Router();
const passport = require("passport");

router.get("/github", passport.authenticate("github"));
router.get(
  "/github/callback",
  passport.authenticate("github", {
    successRedirect: process.env.CLIENT_REDIRECT_URI,
    failureRedirect: "/failure",
  })
);

module.exports = router;
