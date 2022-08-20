const { db } = require("../db/config");

const search = async (req, res) => {
  const { keyw } = req.query;
  console.log(keyw);
  try {
    const { data: searchResults } = await db.query(
      `SELECT users.id, users.username, users.profile_img
            FROM devtinder.skills
            AS ds
            INNER JOIN devtinder.users
            AS users
            ON ds.userId = users.id
            WHERE users.username LIKE "${keyw}%"
            OR ds.skill_1 LIKE "${keyw}%"
            OR ds.skill_2 LIKE "${keyw}%"
            OR ds.skill_3 LIKE "${keyw}%"
            OR ds.skill_4 LIKE "${keyw}%"
            `
    );
    if (!searchResults) {
      res.status(200).json([]);
    }
    res.status(200).json(searchResults);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = { search };
