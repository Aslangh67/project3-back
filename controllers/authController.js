// var express = require("express");
// var router = express.Router();
var db = require('../models');
const bcrypt = require('bcryptjs');


module.exports = {

    //route for user login
    // api/auth/login
    logIn: function (req, res) {
        db.User_profile.findOne({
            where: {
                username: req.body.username
            }
        }).then(function (dbUser) {
            //compares password send in req.body to one in database, will return true if matched.
            if (!dbUser) {
                res.json({ loggedIn: false })
            }
            else if (bcrypt.compareSync(req.body.password, dbUser.password)) {
                //create new session property "user", set equal to logged in user
                req.session.user = { username: dbUser.username, id: dbUser.id };
                // save the user id to local storage
                res.json({ loggedIn: true })
            }
            else {
                //delete existing user session, add error
                req.session.user = false;
                req.session.error = 'auth failed'
                res.json({ loggedIn: false });
            }
        })
    },

    // api/auth/logout
    logOut: function (req, res) {
        //delete session user, logging you out
        req.session.destroy(function () {
            res.send('successfully logged out')

        })
    },

    //developer route to see all the session variables.
    // api/auth/readsession
    readSessions: function (req, res) {
        res.json(req.session);
    }
}