const { db } = require("../db/config");

const getUserTimeline = async (req, res) => {
  let { isRecruiter, preferences } = req.body;
  const {userId} = req.params
  preferences = preferences.map(preference => `'${preference}'`);
  if (isRecruiter) {
    try {
      let { data: rejections } = await db.searchByValue({
        table: "rejections",
        searchAttribute: "actor_id",
        searchValue: userId,
        attributes: ["receiver_id"],
      });
      rejections =
        userId +
        "," +
        rejections.map(rejection => rejection.receiver_id).join(",");
      if (rejections.endsWith(",")) {
        rejections = rejections.slice(0, -1);
      }
      const { data } = await db.query(
        `SELECT users.id, users.location, users.bio, users.profile_img, users.username, 
                ds.skill_1, ds.skill_2, ds.skill_3, ds.skill_4, 
                sp.skill_1 as skill_1_prof, sp.skill_2 as skill_2_prof, sp.skill_3 as skill_3_prof, sp.skill_4 as skill_4_prof
                FROM devtinder.skills as ds
                INNER JOIN devtinder.users 
                AS users 
                ON ds.userId = users.id
                INNER JOIN devtinder.skills_proficiencies
                AS sp
                ON sp.userId = users.id
                WHERE users.id NOT IN (${rejections})
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
