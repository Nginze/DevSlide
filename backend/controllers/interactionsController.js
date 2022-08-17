const { db } = require("../db/config");

const getUserActivity = async (req, res) => {
  const {userId} = req.body
  try {
    const { data: connections } = await db.query(
      `SELECT conn.actorId, conn.status, 
         users.first_name, users.last_name
         FROM devtinder.connections 
         AS conn
         INNER JOIN devtinder.users
         AS users
         ON users.id = conn.actorId
         WHERE conn.recieverId = ${userId}
         AND conn.status = "PENDING"`
    );
    res.status(200).json(connections);
  } catch (err) {
    res.status(500).json(err);
  }
};
const createConnection = async (req, res) => {
  const { data } = req.body;
  try {
    const { data: queryResponse } = await db.insert({
      table: "connections",
      records: [data],
    });
    res.status(200).json(queryResponse);
  } catch (err) {
    res.status(500).json(err);
  }
};
const createRejection = async (req, res) => {
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

const acceptConnection = async (req, res) => {
  const { data } = req.body;
  try {
    const { data: queryResponse } = await db.update({
      table: "connections",
      records: [data],
    });
    res.status(200).json(queryResponse);
  } catch (err) {
    res.status(200).json(err);
  }
};
const rejectConnection = async (req, res) => {
  const { data } = req.body;
  try {
    const { data: queryResponse } = await db.update({
      table: "connections",
      records: [data],
    });
    res.status(200).json(queryResponse);
  } catch (err) {
    res.status(200).json(err);
  }
};

module.exports = {
  getUserActivity,
  createConnection,
  createRejection,
  acceptConnection,
  rejectConnection,
};
