const LocalStrategy = require("passport-local").Strategy;
const GoogleStrategy = require('passport-google-oauth2').Strategy;
const mongoose = require("mongoose");
const { countDocuments } = require("../models/User");
const User = require("../models/User");
const UserGoogle = require("../models/UserGoogle")

module.exports = function (passport) {
  passport.use(new LocalStrategy({ usernameField: "email" }, (email, password, done) => {
      User.findOne({ email: email.toLowerCase() }, (err, user) => {
        if (err) {
          return done(err);
        }
        if (!user) {
          return done(null, false, { msg: `Email ${email} not found.` });
        }
        if (!user.password) {
          return done(null, false, {
            msg:
              "Your account was registered using a sign-in provider. To enable password login, sign in using a provider, and then set a password under your user profile.",
          });
        }
        user.comparePassword(password, (err, isMatch) => {
          if (err) {
            return done(err);
          }
          if (isMatch) {
            return done(null, user);
          }
          return done(null, false, { msg: "Invalid email or password." });
        });
      });
    })
  );
  passport.use(new GoogleStrategy({
      clientID:process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:2121/auth/google/callback",
      passReqToCallback: true
    },
    async (req,accessToken, refreshToken, profile, done) => {
      const newUser = {
       googleId: profile.id,
       displayName: profile.displayName,
       firstName: profile.name.givenName,
       lastName: profile.name.familyName,
       image: profile.photos[0].value
      }
      console.log(newUser)
      try {
        let user = await UserGoogle.findOne({googleId: profile.id})
        if(user) {
            done(null, user)
        } else {
            user = await UserGoogle.create(newUser)
            done(null, user)
        }
        }catch (err) {
        console.error(err)
      }
    }
  ));

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => done(err, user));
  });

  passport.deserializeUser((id, done) => {
    UserGoogle.findById(id, (err, user) => done(err, user));
  });
};
