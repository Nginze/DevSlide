const { Router } = require("express");
const {
  getUserActivity,
  createConnection,
  acceptConnection,
  rejectConnection,
  createRejection,
  likeProfile,
  dislikeProfile,
  acceptRequest,
  declineRequest,
  getMatches,
} = require("../controllers/interactionsController");

const router = Router();

router.get("/activity/:userId", getUserActivity);
router.get("/matches/:userId", getMatches);
router.post("/like", likeProfile);
router.post("/dislike", dislikeProfile);
router.put("/accept", acceptRequest);
router.put("/decline", declineRequest);

module.exports = router;
