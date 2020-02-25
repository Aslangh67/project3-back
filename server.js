
// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");
// var compression = require('compression');
const cors = require("cors");
const session = require("express-session");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Development Front-end host comment out for deployment
const url = "http://localhost:3000";
// Deployed Front-end host un-comment
// const url = "https://food-savers-front.herokuapp.com/";

app.use(cors({
    origin: [url],
    credentials: true
  }));
  app.use(session({ secret: "something secret here", resave: true, saveUninitialized: true,cookie:{maxAge: //7200000 
    360000000
} }));


  // Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Routes
// =============================================================
const allRoutes = require('./controllers/routes');

app.use('/', allRoutes);


// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: false }).then(function() {
    app.listen(PORT, function() {
        console.log("App listening on PORT " + PORT);
    });
});