// Import the models to use its database functions.
const db = require("../models");

module.exports = {
  // Create inventory item
  // api/schedule/new
  newSchedule: function (req, res) {
    db.Pickup_schedule.create({
      date: req.body.date,
      CompanyProfileId: req.body.CompanyProfileId,
      LocationId: req.body.LocationId,
    })
      .then(function (data) {
        // return data
        res.json(data);
      }).catch(function (err) {
        if (err) res.status(404).send(err);
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
    }).catch(function (err) {
      if (err) res.status(404).send(err);
      console.error(err);
    });
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
    }).catch(function (err) {
      if (err) res.status(404).send(err);
      console.error(err);
    });
  },

  // Edit inventory item
  // api/schedule/:id
  editSchedule: function (req, res) {
    db.Pickup_schedule.update(
      req.body, {
      date: req.body.date,
      CompanyProfileId: req.body.CompanyProfileId,
      LocationId: req.body.LocationId,
      where: {
        id: req.params.id,
      }
    }).then(function (dbInventory) {
      res.json(dbInventory);
    }).catch(function (err) {
      if (err) res.status(404).send(err);
      console.error(err);
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
    }).catch(function (err) {
      if (err) res.status(404).send(err);
      console.error(err);
    });
  }
}

