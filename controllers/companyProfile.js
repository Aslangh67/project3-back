const express = require("express");
// const sequelize, { Op } = require("sequelize")
const router = express.Router();
// Import the models to use its database functions.
const db = require("../models");

module.exports = {
  // Create company item
  // api/company/new
  newCompany: function (req, res) {
    db.Company_profile.create({
      company_name: req.body.company_name,
      // delete main address after syncing with Aslan's changes
      main_address: req.body.main_address,
      ein: req.body.ein,
      account_type: req.body.account_type,
      ein: req.body.ein
    })
      .then(function (data) {
        // return data
        res.json(data);
      }).catch(function (err) {
        console.error(err);
      })
  },

  // Get all companies
  // api/company/
  getCompany: function (req, res) {
    const query = {};
    db.Company_profile.findAll({
      where: query
    }).then(function (dbCompany) {
      res.json(dbCompany);
    });
    res.json('task index route!')
  },

  // Get specific company
  // api/company/:id
  getSingleCompany: function (req, res) {
    db.Company_profile.findOne({
      where: {
        id: req.params.id
      }
    }).then(function (dbCompany) {
      res.json(dbCompany);
    });
  },

  // Edit company
  // api/company/:id
  editCompany: function (req, res) {
    db.Company_profile.update(
      req.body, {
      where: {
        id: req.body.id,
        // I'm not sure about these
        date: req.body.date,
        Company_profile_id: req.body.Company_profile_id,
        Location_id: req.body.Location_id
      }
    }).then(function (dbCompany) {
      res.json(dbCompany);
    });
  },

  // Delete company
  // api/company/:id
  deleteCompany: function (req, res) {
    db.Company_profile.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (dbCompany) {
      res.json(dbCompany);
    });
  }
}

