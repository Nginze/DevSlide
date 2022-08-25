const { redisClient } = require("./db");
const addUser = async (userId, socketId) => {
  try {
    await redisClient.sAdd("activeUsers", JSON.stringify(userId));
    await redisClient.set(JSON.stringify(userId), socketId) 
  } catch (err) {
    console.log(err);
  }
};

const removeUser = async userId => {
  console.log("removed", userId);
  try {
    await redisClient.sRem("activeUsers", JSON.stringify(userId));
  } catch (err) {
    console.log(err);
  }
};

const getRecipient = async recipientId => {
  return await redisClient.get(recipientId);
};

module.exports = { addUser, removeUser, getRecipient };
