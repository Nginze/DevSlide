const passport = require("passport");
const { db } = require("../db/config");
var GitHubStrategy = require("passport-github2").Strategy;

passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: process.env.GITHUB_CALLBACK_URL,
    },
    async (accessToken, refreshToken, profile, done) => {

      const options = {
        table: "users",
        records: [
          {
            id: profile.id,
            username: profile.username,
            bio: profile.bio,
            portfolio_url: profile._json.blog,
            profile_img: profile.photos[0].value,
            location: profile._json.location,
            email: profile.email
          },
        ],
      };
      try {
        const { data: user } = await db.searchByHash({
          table: "users",
          hashValues: [profile.id],
          attributes: ["*"],
        });
        if (user.length > 0) {
          done(null, user[0]);
        } else {
          const { statusCode, data: queryResponse } = await db.insert(options);
          if (statusCode == 200) {
            const { data: user } = await db.searchByHash({
              table: "users",
              hashValues: [queryResponse.inserted_hashes[0]],
              attributes: ["*"],
            });
            done(null, user[0]);
          }
        }
      } catch (err) {
        console.log(err);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (userId, done) => {
  try {
    const { statusCode, data: user } = await db.query(
      `SELECT users.id, users.username, users.location, users.profile_img,users.bio, users.portfolio_url, ds.skill_1, ds.skill_2, ds.skill_3, ds.skill_4,sp.skill_1, sp.skill_2, sp.skill_3, sp.skill_4
            FROM devtinder.users 
            AS users
            INNER JOIN devtinder.skills
            AS ds
            ON users.id = ds.userId
            INNER JOIN devtinder.skills_proficiencies
            AS sp
            ON users.id = sp.userId
            WHERE users.id = ${userId}`
      
    );
    done(null, user[0]);
  } catch (err) {
    console.log(err);
  }
});
