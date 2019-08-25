
const express = require('express');
const router = new express.Router();
const passport = require('../config/passport');

router.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));

router.get("/google/callback", passport.authenticate("google", {
    failureRedirect: "/", session: false
}), (req, res) => {
    const token = req.user.token;
    console.log("Callback token ", token);
    res.redirect("http://localhost:3001?token=" + token);
})
