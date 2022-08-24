const { Router } = require("express");
const { createChat, getChats, getRecruiterChats, getDeveloperChats } = require("../controllers/chatController");
const router = Router();

router.post("/", createChat);
// router.get("/:id/byId", getConversationById);
router.get("/d/:userId", getDeveloperChats);
router.get("/r/:userId", getRecruiterChats)
// router.get("/find/:userOne/:userTwo", getOneConversation);

module.exports = router;