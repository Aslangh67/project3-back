const express = require("express");
// const sequelize, { Op } = require("sequelize")
const router = express.Router();
// Import the models to use its database functions.
const db = require("../models");

module.exports = {
  // Create inventory item
  // api/inventory/new
  newInventory: function (req, res) {
    db.Inventory.create({
      title: req.body.title,
      quantity: req.body.quantity,
      unit: req.body.unit,
      value_unit: req.body.value_unit,
      exp_date: req.body.exp_date,
    })
      .then(function (data) {
        // return data
        res.json(data);
      }).catch(function (err) {
        console.error(err);
      })
  },

  // Get all inventory item
  // api/inventory/
  getInventory: function (req, res) {
    const query = {};
    db.Inventory.findAll({
      where: query
    }).then(function (dbInventory) {
      res.json(dbInventory);
    });
    res.json('task index route!')
  },

  // Get specific inventory item
  // api/inventory/:id
  getSingleInventory: function (req, res) {
    db.Inventory.findOne({
      where: {
        id: req.params.id
      }
    }).then(function (dbInventory) {
      res.json(dbInventory);
    });
  },

  // Edit inventory item
  // api/inventory/:id
  editInventory: function (req, res) {
    db.Inventory.update(
      req.body, {
      where: {
        id: req.body.id,
        // I'm not sure about these
        title: req.body.title,
        quantity: req.body.quantity,
        unit: req.body.unit,
        value_unit: req.body.value_unit,
        exp_date: req.body.exp_date,
      }
    }).then(function (dbInventory) {
      res.json(dbInventory);
    });
  },

  // Delete inventory
  // api/inventory/:id
  deleteInventory: function (req, res) {
    db.Inventory.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (dbInventory) {
      res.json(dbInventory);
    });
  }
}
