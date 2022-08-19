const { db } = require("../db/config");

const getUserProfile = async (req, res) => {
  const { userId } = req.body;
  // const options = {
  //   table: "users",
  //   searchAttribute: 'id',
  //   searchValue: userId,
  //   attributes: ["*"],
  // };
  try {
    const { data: profile } = await db.query(
      `SELECT users.id, users.username, users.location, users.profile_img, users.portfolio_url, ds.skill_1, ds.skill_2, ds.skill_3, ds.skill_4
            FROM devtinder.users 
            AS users
            INNER JOIN devtinder.skills
            AS ds
            ON users.id = ds.userId
            WHERE users.id = ${userId}`
    );
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
    table: "skills",
    records: [data],
  };
  try {
    const res = await db.upsert(options);
    res.status(200).json(res);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = { getUserProfile, createUserProfile, updateUserProfile };
