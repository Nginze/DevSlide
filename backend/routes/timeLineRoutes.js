const { Router } = require("express");
const { getUserTimeline } = require("../controllers/timeLineController");

const router = Router();

router.post("/", getUserTimeline);

module.exports = router;
