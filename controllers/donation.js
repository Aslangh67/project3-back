const express = require("express");
const sequelize, { Op } = require("sequelize")
const router = express.Router();
// Import the models to use its database functions.
const db = require("../models");

module.exports = {
  // Create user profile
  // api/donation/new
  newDonation: function (req, res) {
    db.Inventory_donated.create({
      Company_profile_id: req.body.Company_profile_id,
      Inventory_id: req.body.Inventory_id
    })
      .then(function (data) {
        // return data
        res.json(data);
      }).catch(function (err) {
        console.error(err);
      })
  },

  // Get all user profile
  // api/donation/
  getDonations: function (req, res) {
    const query = {};
    db.Inventory_donated.findAll({
      where: query
    }).then(function (dbUser_profile) {
      res.json(dbUser_profile);
    });
    res.json('task index route!')
  },

  // Get specific user profile item
  // api/donation/:id
  getSingleDonation: function (req, res) {
    db.Inventory_donated.findOne({
      where: {
        id: req.params.id
      }
    }).then(function (dbUser_profile) {
      res.json(dbUser_profile);
    });
  },

  // Edit user profile
  // api/donation/:id
  editDonation: function (req, res) {
    db.Inventory_donated.update(
      req.body, {
      where: {
        id: req.body.id,
        // I'm not sure about these
        Company_profile_id: req.body.Company_profile_id,
        Inventory_id: req.body.Inventory_id
      }
    }).then(function (dbUser_profile) {
      res.json(dbUser_profile);
    });
  },

  // Delete user
  // api/donation/:id
  deleteDonation: function (req, res) {
    db.Inventory_donated.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (dbUser_profile) {
      res.json(dbUser_profile);
    });
  }
}

