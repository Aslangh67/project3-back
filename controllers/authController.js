// Npm packages
const bcrypt = require('bcryptjs');
// Import the models to use its database functions.
var db = require('../models');


module.exports = {

    //route for user login
    // api/auth/login
    logIn: function (req, res) {
        db.User_profile.findOne({
            where: {
                email: req.body.email
            }
        }).then(function (dbUser) {
            //compares password send in req.body to one in database, will return true if matched.
            if (bcrypt.compareSync(req.body.password, dbUser.password)) {
                //create new session property "user", set equal to logged in user

                req.session.user = { email: dbUser.email, id: dbUser.id, CompanyProfileId: dbUser.CompanyProfileId };

                res.json(req.session.user )
                console.log(req.session);
            }
            else {
                res.status(401).json("not logged in")
            }
        }).catch(function (err) {
            if (err) res.status(404).send(err);
            console.error(err);
        })
    },

    // api/auth/logout
    logOut: function (req, res) {
        //delete session user, logging you out
        req.session.destroy(function () {
            res.send('successfully logged out')

        }).catch(function (err) {
            if (err) res.status(404).send(err);
            console.error(err);
        })
    },
    // api/auth/loggedinuser
    verifyLogin: function (req, res) {
        if (req.session.user) {
            res.json(req.session.user)
        } else {
            res.status(401).json("not logged in")
        }
    },

    // api/auth/verifylogin
    verifyLogin: function (req, res) {
        //delete session user, logging you out
        if (req.session.user) {
            res.json(req.session.user)
            console.log(req.session.user);
        } else {
            res.status(401).json("Not logged in");
        }
    },

    //developer route to see all the session variables.
    // api/auth/readsession
    readSessions: function (req, res) {
        res.json(req.session);
    }
}