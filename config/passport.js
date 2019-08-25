const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

passport.serializeUser((user, done) => {
    done(null, user);
})

passport.deserializerUser((user, done) => {
    done(null, user);
})

passport.use(
    new GoogleStrategy({
        clientID: "",
        clientSecret: "",
        callbackUrl: "http://localhost:3001/auth/google/callback"
    }, (accessToken, refreshToken, profile, done) => {
        const userData = {
            email: profile.emails[0].value,
            name: profile.displayName,
            token: accessToken
        };

        done(null, userData);
    })
)