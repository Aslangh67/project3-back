// Import the models to use its database functions.
const db = require("../models");

module.exports = {
  // Create user profile
  // api/donation/new
  newDonation: function (req, res) {
    db.Inventory_donated.create({
      CompanyProfileId: req.body.CompanyProfileId,
      InventoryId: req.body.InventoryId
    })
      .then(function (data) {
        // return data
        res.json(data);
      }).catch(function (err) {
        if (err) res.status(404).send(err);
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
    }).catch(function (err) {
      if (err) res.status(404).send(err);
      console.error(err);
    });
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
    }).catch(function (err) {
      if (err) res.status(404).send(err);
      console.error(err);
    });
  },

  // Edit user profile
  // api/donation/:id
  editDonation: function (req, res) {
    db.Inventory_donated.update(
      req.body, {
      CompanyProfileId: req.body.CompanyProfileId,
      InventoryId: req.body.InventoryId,
      where: {
        id: req.params.id
      }
    }).then(function (dbUser_profile) {
      res.json(dbUser_profile);
    }).catch(function (err) {
      if (err) res.status(404).send(err);
      console.error(err);
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
    }).catch(function (err) {
      if (err) res.status(404).send(err);
      console.error(err);
    });
  }
}

