const express = require("express");
// const sequelize, { Op } = require("sequelize")
const router = express.Router();
// Import the models to use its database functions.
const db = require("../models");

module.exports = {
  // Create location
  // api/location/new
  newLocation: function (req, res) {
    db.Location.create({
      address: req.body.address,
      city: req.body.city,
      state: req.body.state,
      zip: req.body.zip,
      ein: req.body.ein,
      latitude: req.body.latitude,
      longitude: req.body.longitude,
    })
      .then(function (data) {
        // return data
        res.json(data);
      }).catch(function (err) {
        console.error(err);
      })
  },

  // Get all location
  // api/location/
  getLocations: function (req, res) {
    const query = {};
    db.Location.findAll({
      where: query
    }).then(function (dbInventory) {
      res.json(dbInventory);
    });
    res.json('task index route!')
  },

  // Get specific location
  // api/location/:id
  getSingleLocation: function (req, res) {
    db.Location.findOne({
      where: {
        id: req.params.id
      }
    }).then(function (dbInventory) {
      res.json(dbInventory);
    });
  },

  // Edit location
  // api/location/:id
  editLocation: function (req, res) {
    db.Location.update(
      req.body, {
      where: {
        id: req.body.id,
        // I'm not sure about these
        address: req.body.address,
        city: req.body.city,
        state: req.body.state,
        zip: req.body.zip,
        ein: req.body.ein,
        latitude: req.body.latitude,
        longitude: req.body.longitude,
      }
    }).then(function (dbInventory) {
      res.json(dbInventory);
    });
  },

  // Delete inventory
  // api/location/:id
  deleteLocation: function (req, res) {
    db.Location.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (dbInventory) {
      res.json(dbInventory);
    });
  }
}

