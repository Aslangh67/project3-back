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
      LocationId: req.body.LocationId
    }).then(function (data) {
      // return data
      res.json(data);
    }).catch(function (err) {
      if (err) res.status(404).send(err);
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
    }).catch(function (err) {
      if (err) res.status(404).send(err);
      console.error(err);
    });
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
    }).catch(function (err) {
      if (err) res.status(404).send(err);
      console.error(err);
    });
  },

  // Edit inventory item
  // api/inventory/update
  editInventory: function (req, res) {
    db.Inventory.update(
      req.body, {
      title: req.body.title,
      quantity: req.body.quantity,
      unit: req.body.unit,
      value_unit: req.body.value_unit,
      exp_date: req.body.exp_date,
      LocationId: req.body.LocationId,
      where: {
        id: req.body.id,
      }
    }).then(function (dbInventory) {
      res.json(dbInventory);
    }).catch(function (err) {
      if (err) res.status(404).send(err);
      console.error(err);
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
    }).catch(function (err) {
      if (err) res.status(404).send(err);
      console.error(err);
    });
  }
}

