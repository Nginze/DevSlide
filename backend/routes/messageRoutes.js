const { Router } = require("express");
const { getChatMessages, createMessage } = require("../controllers/messageController");
const router = Router();

router.post("/", createMessage);
router.get("/:conversationId", getChatMessages);

module.exports = router;
