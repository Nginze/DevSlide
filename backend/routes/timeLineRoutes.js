const { Router } = require("express");
const { getUserTimeline } = require("../controllers/timeLineController");

const router = Router();

router.post("/:userId", getUserTimeline);

module.exports = router;
