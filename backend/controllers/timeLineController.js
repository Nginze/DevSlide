const { db } = require("../db/config");

const getUserTimeline = async (req, res) => {
  let { isRecruiter, preferences, userId } = req.body;
  preferences = preferences.map(preference => `'${preference}'`);
  if (isRecruiter) {
    try {
      let { data: rejections } = await db.searchByValue({
        table: "rejections",
        searchAttribute: "actor_id",
        searchValue: userId,
        attributes: ["receiver_id"],
      });
      rejections = userId + "," +  rejections.map(rejection => rejection.receiver_id).join(',') 
      if(rejections.endsWith(",")){
        rejections = rejections.slice(0, -1)
      }
      console.log(rejections)
      const { data } = await db.query(
        `SELECT users.id, users.username,  users.profile_img, users.location
                FROM devtinder.skills as ds
                INNER JOIN devtinder.users as users
                ON ds.userId = users.id 
                WHERE users.id NOT IN (${rejections})
                AND ds.skill_1 in (${preferences.join(",")})
                OR ds.skill_2 in (${preferences.join(",")})
                OR ds.skill_3 in (${preferences.join(",")})
                OR ds.skill_4 in (${preferences.join(",")})
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
