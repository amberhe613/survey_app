const express = require("express");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("./config/keys");

const app = express();

// Set google OAuth with passport.js
passport.use(
    new GoogleStrategy(
        {
            clientID: keys.googleClientID,
            clientSecret: keys.googleClientSecret,
            callbackURL: "/auth/google/callback"
        },
        (accessToken, refreshToken, profile, done) => {
            console.log("access token", accessToken);
            console.log("refresh token", refreshToken);
            console.log("profile", profile);
        }
    )
);

app.get(
    "/auth/google",
    passport.authenticate("google", {
        scope: ['profile', 'email']
    })
);

app.get("/auth/google/callback", passport.authenticate("google"));

//Set up serves
const PORT = process.env.PORT || 5000;
app.listen(PORT, (req, res) => {
    console.log("Serves started in ", PORT);
});