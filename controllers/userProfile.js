// const express = require("express");
// // const sequelize, { Op } = require("sequelize")
// const router = express.Router();
// Import the models to use its database functions.
const db = require("../models");
const bcrypt = require('bcryptjs');

module.exports = {
  // Create user profile
  // api/user/new
  newUser: function (req, res) {
    db.User_profile.create({
      username: req.body.username,
      password: req.body.password,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      admin: req.body.admin,
      companyProfileId: req.body.companyProfileId
    })
      .then(function (data) {
        // return data
        res.json(data);
      }).catch(function (err) {
        console.error(err);
        res.json({
          success: false,
          message: error.message
      })
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
    });
    res.json('task index route!')
  },

  // Get specific user profile item
  // api/user/:id
  getSingleUser: function (req, res) {
    db.User_profile.findOne({
      where: {
        id: req.params.id
      }
    }).then(function (dbUser_profile) {
      res.json(dbUser_profile);
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
    });
  }
}

