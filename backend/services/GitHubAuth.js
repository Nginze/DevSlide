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
            first_name: profile.displayName.split(" ")[0],
            last_name: profile.displayName.split(" ")[1],
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
    const { statusCode, data: user } = await db.searchByHash({
      table: "users",
      hashValues: [userId],
      attributes: ["id"],
    });
    done(null, user[0]);
  } catch (err) {
    console.log(err);
  }
});