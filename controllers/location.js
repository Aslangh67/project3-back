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
      CompanyProfileId: req.body.CompanyProfileId
    })
      .then(function (data) {
        // return data
        res.json(data);
      }).catch(function (err) {
        if (err) res.status(404).send(err);
        console.error(err);
      })
  },

  // Get all location
  // api/location/
  getLocations: function (req, res) {
    db.Inventory.findAll({
      where:{
        charity_id:null
      }
    }).then(result=>{
      
      let ids=[]
      result.map(item=>{
        if(!ids.includes(item.LocationId)){
          ids.push(item.LocationId)
        }
        
      })
      console.log(ids);
      db.Location.findAll({
        where: {
          city: req.params.city, id:ids
        }, include: [db.Company_profile]
      }).then(function (dbInventory) {      
        res.json(dbInventory);
      })
    }).catch(function (err) {
      if (err) res.status(404).send(err);
      console.error(err);
    });
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
    }).catch(function (err) {
      if (err) res.status(404).send(err);
      console.error(err);
    });
  },

  // Edit location
  // api/location/:id
  editLocation: function (req, res) {
    db.Location.update(
      req.body, {
      address: req.body.address,
      city: req.body.city,
      state: req.body.state,
      zip: req.body.zip,
      ein: req.body.ein,
      latitude: req.body.latitude,
      longitude: req.body.longitude,
      CompanyProfileId: req.body.CompanyProfileId,
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
  // api/location/:id
  deleteLocation: function (req, res) {
    db.Location.destroy({
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

