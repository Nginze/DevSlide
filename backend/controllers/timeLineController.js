const { db } = require("../db/config");

const getUserTimeline = async (req, res) => {
  let { isRecruiter, preferences } = req.body;
  preferences = preferences.map(preference => `'${preference}'`);
  if (isRecruiter) {
    try {
      const { data } = await db.query(
        `SELECT users.id, users.first_name, users.last_name
                FROM devtinder.developers_skills as ds
                INNER JOIN devtinder.users as users
                ON ds.userId = users.id 
                INNER JOIN devtinder.skills as skills 
                ON  skills.id = ds.skillId
                WHERE skills.name in (${preferences.join(",")})
        `
      );
      res.status(200).json(data);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    try {
      const { data, preferences } = await db.query(
        `SELECT distinct users.id, users.first_name, skills.name
                FROM devtinder.developers_skills as ds
                INNER JOIN devtinder.users as users
                ON ds.userId = users.id 
                INNER JOIN devtinder.skills as skills 
                ON  skills.id = ds.skillId
                WHERE skills.name in (${preferences.join(",")})
        `
      );
      res.status(200).json(data);
    } catch (err) {
      res.status(500).json(err);
    }
  }
};

module.exports = {
  getUserTimeline,
};
