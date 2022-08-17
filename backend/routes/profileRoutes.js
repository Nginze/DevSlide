const { Router } = require("express");
const {
  getUserProfile,
  createUserProfile,
  updateUserProfile,
} = require("../controllers/profileController");
const router = Router();

router.get("/", getUserProfile);
router.post("/", createUserProfile);
router.put("/", updateUserProfile);

module.exports = router;
