const express = require("express");
const sequelize, { Op } = require("sequelize")
const router = express.Router();
// Import the models to use its database functions.
const db = require("../models");

module.exports = {
  // Create inventory item
  // api/schedule/new
  newSchedule: function (req, res) {
    db.Pickup_schedule.create({
      date: req.body.date,
      Company_profile_id: req.body.Company_profile_id,
      Location_id: req.body.Location_id
    })
      .then(function (data) {
        // return data
        res.json(data);
      }).catch(function (err) {
        console.error(err);
      })
  },

  // Get all inventory item
  // api/schedule/
  getSchedule: function (req, res) {
    const query = {};
    db.Pickup_schedule.findAll({
      where: query
    }).then(function (dbInventory) {
      res.json(dbInventory);
    });
    res.json('task index route!')
  },

  // Get specific inventory item
  // api/schedule/:id
  getSingleSchedule: function (req, res) {
    db.Pickup_schedule.findOne({
      where: {
        id: req.params.id
      }
    }).then(function (dbInventory) {
      res.json(dbInventory);
    });
  },

  // Edit inventory item
  // api/schedule/:id
  editSchedule: function (req, res) {
    db.Pickup_schedule.update(
      req.body, {
      where: {
        id: req.body.id,
        // I'm not sure about these
        date: req.body.date,
        Company_profile_id: req.body.Company_profile_id,
        Location_id: req.body.Location_id
      }
    }).then(function (dbInventory) {
      res.json(dbInventory);
    });
  },

  // Delete inventory
  // api/schedule/:id
  deleteSchedule: function (req, res) {
    db.Pickup_schedule.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (dbInventory) {
      res.json(dbInventory);
    });
  }
}

