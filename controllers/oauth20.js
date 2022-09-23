const passport = require('passport')
const express =  require('express')

exports.googleLogin= passport.authenticate('google', { scope: ['profile']})

exports.googleCallback = passport.authenticate('google', {failureRedirect: '/login'}), (req,res) => {
    res.redirect('/main')
}