require("dotenv").config();
require("../services/GitHubAuth");
require("../services/GoogleAuth")
const { Router } = require("express");
const router = Router();
const passport = require("passport");

router.get("/github", passport.authenticate("github"));
router.get("/google", passport.authenticate("google", { scope: ["profile"] }));
router.get(
  "/github/callback",
  passport.authenticate("github", {
    successRedirect: process.env.CLIENT_REDIRECT_URI,
    failureRedirect: "/failure",
  })
);
router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: process.env.CLIENT_REDIRECT_URI,
    failureRedirect: "/failure",
  })
);

module.exports = router;
