const { Router } = require("express");
const {
  getUserActivity,
  createConnection,
  acceptConnection,
  rejectConnection,
  createRejection,
} = require("../controllers/interactionsController");

const router = Router();

router.get("/activity", getUserActivity);
router.post("/connect", createConnection);
router.post("/rejection", createRejection);
router.put("/accept", acceptConnection);
router.put("/reject", rejectConnection);

module.exports = router;
