const { db } = require("../db/config");

const createMessage = async (req, res) => {
  try {
    const result = await db.insert({
      table: "messages",
      records: [req.body],
    });
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json(err);
  }
};

const getChatMessages = async (req, res) => {
  const { conversationId } = req.params;
  try {
    const {data} = await db.query(
        `SELECT * 
            FROM devtinder.messages msg
            WHERE msg.chat_id = '${conversationId}'
            ORDER BY msg.__createdtime__ ASC`
    );
    res.status(200).json(data)
  } catch (err) {
    res.status(500).json(err)
  }
};

module.exports = {
  createMessage,
  getChatMessages,
};
