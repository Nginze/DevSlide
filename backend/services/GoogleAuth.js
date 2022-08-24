require("dotenv").config();
const GoogleStrategy = require("passport-google-oauth2").Strategy;
const passport = require("passport");
const { db } = require("../db/config");

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK_URI,
      passReqToCallback: true,
    },
    async (request, accessToken, refreshToken, profile, done) => {
      const options = {
        table: "recruiters",
        records: [
          {
            id: profile.id,
            username: profile.displayName,
            profile_img: profile.picture,
            isRecruiter: true
          },
        ],
      };
      try {
        const { data: user } = await db.searchByHash({
          table: "recruiters",
          hashValues: [profile.id],
          attributes: ["*"],
        });
        console.log("before insert")
        if (user.length > 0) {
          done(null, user[0]);
        } else {
          const { statusCode, data: queryResponse } = await db.insert(options);
          console.log("after insert")
          if (statusCode == 200) {
            const { data: user } = await db.searchByHash({
              table: "recruiters",
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
      `SELECT rc.id, rc.username, rc.profile_img, rc.bio, rc.location, rc.isRecruiter
            FROM devtinder.recruiters 
            AS rc
            INNER JOIN devtinder.preferences
            AS pf
            ON rc.id = pf.userId
            WHERE rc.id = ${userId}`
      
    );
    done(null, user[0]);
  } catch (err) {
    console.log(err);
  }
});
