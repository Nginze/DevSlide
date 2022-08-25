const { Router } = require("express");
const {
  getUserProfile,
  updateUserProfile,
} = require("../controllers/profileController");
const router = Router();

router.get("/:userId", getUserProfile);
router.put("/", updateUserProfile);

module.exports = router;
