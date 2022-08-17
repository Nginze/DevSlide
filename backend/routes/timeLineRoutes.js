const { Router } = require("express");
const { getUserTimeline } = require("../controllers/timeLineController");

const router = Router();

router.get("/", getUserTimeline);

module.exports = router;
