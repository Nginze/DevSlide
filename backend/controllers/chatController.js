const { db } = require("../db/config");

const createChat = async (req, res) => {
  try {
    const result = await db.insert({
      table: "chats",
      records: [req.body],
    });
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json(err);
  }
};

const getDeveloperChats = async (req, res) => {
  const { userId } = req.params;
  try {
    const {data} = await db.query(
      `SELECT ch.id, users.id, users.username, users.bio, users.profile_img
              FROM devtinder.chats as ch
              INNER JOIN devtinder.users as users
              ON users.id = ch.recruiter_id
              WHERE ch.developer_id = ${userId}
             `
    );
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
};


const getRecruiterChats= async (req, res) => {
  const { userId } = req.params;
  try {
    const {data} = await db.query(
      `SELECT ch.id, users.id, users.username, users.bio, users.profile_img
              FROM devtinder.chats as ch
              INNER JOIN devtinder.users as users
              ON users.id = ch.developer_id
              WHERE ch.recruiter_id = ${userId}
             `
    );
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
};

const getOneChat = async (req, res) => {
  const { userId_1, userId_2 } = req.params;
  try {
    const result = await db.query(
      `SELECT * 
              FROM devtinder.chats as ch
              WHERE ch.user_1 = ${userId_1}
              OR ch.user_2 = ${userId_2}`
    );
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json(err);
  }
};

const getChat = async (req, res) => {
  const { chatId } = req.params;
  try {
    const result = await db.query(
      `SELECT *
            FROM devtinder.chats as ch
            WHERE ch.id = ${chatId}`
    );
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json(err);
  }
};
module.exports = {
  createChat,
  getRecruiterChats,
  getDeveloperChats
};
