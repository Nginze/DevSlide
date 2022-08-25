const { db } = require("../db/config");

const getUserActivity = async (req, res) => {
  const { userId } = req.params;
  try {
    const { data: connections } = await db.query(
      `SELECT act.id, act.actor_id, act.status, users.username
         FROM devtinder.activities 
         AS act
         INNER JOIN devtinder.users
         AS users
         ON users.id = act.actor_id
         WHERE act.receiver_id = ${userId}
         AND act.status = "PENDING"`
    );
    res.status(200).json(connections);
  } catch (err) {
    res.status(500).json(err);
  }
};
const getMatches = async (req, res) => {
  const { userId } = req.params;
  try {
    const { data: connections } = await db.query(
      `SELECT act.receiver_id, act.status, users.username, users.bio, users.profile_img
         FROM devtinder.activities 
         AS act
         INNER JOIN devtinder.users
         AS users
         ON users.id = act.receiver_id
         WHERE act.actor_id = ${userId}
         AND act.status = "PENDING"`
    );
    res.status(200).json(connections);
  } catch (err) {
    res.status(500).json(err);
  }
};
const likeProfile = async (req, res) => {

  try {
    const { data: queryResponse } = await db.insert({
      table: "activities",
      records: [req.body],
    });
    res.status(200).json(queryResponse);
  } catch (err) {
    res.status(500).json(err);
  }
};
const dislikeProfile = async (req, res) => {
  try {
    const { data: queryResponse } = await db.insert({
      table: "rejections",
      records: [req.body],
    });
    res.status(200).json(queryResponse);
  } catch (err) {
    res.status(500).json(err);
  }
};
const acceptRequest = async (req, res) => {
  try {
    const { data: queryResponse } = await db.update({
      table: "activities",
      records: [req.body],
    });
    res.status(200).json(queryResponse);
  } catch (err) {
    res.status(200).json(err);
  }
};
const declineRequest = async (req, res) => {
  try {
    const { data: queryResponse } = await db.update({
      table: "activities",
      records: [req.body],
    });
    res.status(200).json(queryResponse);
  } catch (err) {
    res.status(200).json(err);
  }
};

module.exports = {
  getUserActivity,
  getMatches,
  likeProfile,
  dislikeProfile,
  acceptRequest,
  declineRequest,
};
