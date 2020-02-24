// Import the models to use its database functions.
const db = require("../models");


module.exports = {
  // Create user profile
  // api/user/new
  newUser: function (req, res) {
    console.log(req.body);
    db.User_profile.create({
      username: req.body.username,
      password: req.body.password,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      admin: req.body.admin,
      CompanyProfileId: req.body.CompanyProfileId
    })
      .then(function (data) {
        // return data
        res.json(data);
      }).catch(function (err) {
        if (err) res.status(400).send(err);
      })
  },


  // Get all user profile
  // api/user/
  getUsers: function (req, res) {
    const query = {};
    db.User_profile.findAll({
      where: query
    }).then(function (dbUser_profile) {
      res.json(dbUser_profile);
    }).catch(function (err) {
      if (err) res.status(404).send(err);
      console.error(err);
  });
  },

  // Get all user profile
  // api/user/email
  checkUserEmail: function (req, res) {
    console.log(req.params.email);
    // console.log(req.params);
    // console.log(req);
    
    db.User_profile.findOne({
      where: {email: req.params.email}
    }).then(function (res2) {
      res.json(res2.email);
    }).catch(function (err) {
      if (err) res.status(404).send(err);
      console.error(err);
  });
  },

  // Get specific user profile item
  // api/user/:id
  getSingleUser: function (req, res) {
    db.Company_profile.findOne({
      where: {
        id: req.params.id
      }, include: [db.Location,db.User_profile]
    }).then(function (dbUser_profile) {
      res.json(dbUser_profile);
    }).catch(function (err) {
      if (err) res.status(404).send(err);
      console.error(err);
  });
  },
  
  // Edit user profile
  // api/user/:id
  editUser: function (req, res) {
    db.User_profile.update(
      req.body, {
      username: req.body.username,
      password: req.body.password,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      admin: req.body.admin,
      companyProfileId: req.body.companyProfileId,
      where: {
        id: req.params.id
      }
    }).then(function (dbUser_profile) {
      res.json(dbUser_profile);
    }).catch(function (err) {
      if (err) res.status(400).send(err);
      console.error(err);
  });
  },

  // Delete user
  // api/user/:id
  deleteUser: function (req, res) {
    db.User_profile.destroy({
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

