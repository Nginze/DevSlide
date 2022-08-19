const { db } = require("../db/config");

const getUserActivity = async (req, res) => {
  const { userId } = req.body;
  try {
    const { data: connections } = await db.query(
      `SELECT act.actorId, act.status, 
         users.first_name, users.last_name
         FROM devtinder.activities 
         AS act
         INNER JOIN devtinder.users
         AS users
         ON users.id = act.actor_id
         WHERE act.recieverId = ${userId}
         AND act.status = "PENDING"`
    );
    res.status(200).json(connections);
  } catch (err) {
    res.status(500).json(err);
  }
};
const likeProfile = async (req, res) => {
  const { data } = req.body;
  try {
    const { data: queryResponse } = await db.insert({
      table: "activities",
      records: [data],
    });
    res.status(200).json(queryResponse);
  } catch (err) {
    res.status(500).json(err);
  }
};
const dislikeProfile = async (req, res) => {
  const { data } = req.body;
  try {
    const { data: queryResponse } = await db.insert({
      table: "rejections",
      records: [data],
    });
    res.status(200).json(queryResponse);
  } catch (err) {
    res.status(500).json(err);
  }
};
const acceptRequest = async (req, res) => {
  const { data } = req.body;
  try {
    const { data: queryResponse } = await db.update({
      table: "activities",
      records: [data],
    });
    res.status(200).json(queryResponse);
  } catch (err) {
    res.status(200).json(err);
  }
};
const declineRequest = async (req, res) => {
  const { data } = req.body;
  try {
    const { data: queryResponse } = await db.update({
      table: "activities",
      records: [data],
    });
    res.status(200).json(queryResponse);
  } catch (err) {
    res.status(200).json(err);
  }
};

module.exports = {
  getUserActivity,
  likeProfile,
  dislikeProfile,
  acceptRequest,
  declineRequest,
};
