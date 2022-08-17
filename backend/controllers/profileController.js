const { db } = require("../db/config");

const getUserProfile = async (req, res) => {
  const { userId } = req.body;
  const options = {
    table: "profiles",
    searchAttribute: 'userId',
    searchValue: userId,
    attributes: ["*"],
  };
  try {
    const { data: profile } = await db.searchByValue(options);
    res.status(200).json(profile[0]);
  } catch (err) {
    res.status(500).json(err);
  }
};

const createUserProfile = async (req, res) => {
  const { data } = req.body;
  const options = {
    table: "profiles",
    records: [data],
  };
  try {
    const { statusCode, data: queryResponse } = await db.insert(options);
    if (statusCode == 200) {
      const { data: profile } = await db.searchByHash({
        table: "profiles",
        hashValues: [queryResponse.inserted_hashes[0]],
        attributes: ["*"],
      });

      res.status(200).json(profile[0]);
    } else {
      res.status(500).json({ msg: "Database insert error" });
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

const updateUserProfile = async (req, res) => {
  const { data } = req.body;
  const options = {
    table: "profiles",
    records: [data],
  };
  try {
    const res = await db.update(options);
    res.status(200).json(res);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = { getUserProfile, createUserProfile, updateUserProfile };
