// Npm packages
const axios = require("axios");
// Import the models to use its database functions.
const db = require("../models");

module.exports = {
  //checking ein
  // api/company/ein

  companyEin: function ({ params }, res) {
    console.log(parseInt(params.ein));
    const einInput = parseInt(params.ein)
    axios.get(`https://projects.propublica.org/nonprofits/api/v2/organizations/${einInput}.json`).then(response => {

      console.log(response.data.organization);
      res.json(response.data.organization)
    }
    )//.catch(err=>console.log(err))
  },

  // Create company item
  // api/company/new
  newCompany: function (req, res) {
    console.log(req.body);

    db.Company_profile.create({
      company_name: req.body.company_name,
      ein: req.body.ein,
      account_type: req.body.account_type
    })
      .then(function (data) {
        // return data
        res.json(data);
        // console.log(res.json(data));
      }).catch(function (err) {
        if (err) res.status(400).send(err);
        console.error(err);
      })
  },

  // Get all companies
  // api/company/
  getCompanies: function (req, res) {
    const query = {};
    db.Company_profile.findAll({
      where: query
    }).then(function (dbCompany) {
      res.json(dbCompany);
    }).catch(function (err) {
      if (err) res.status(404).send(err);
      console.error(err);
    });
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
    }).catch(function (err) {
      if (err) res.status(404).send(err);
      console.error(err);
    });
  },

  // api/company/thisuser
  getSessionCompany: function (req, res) {
    db.Company_profile.findOne({
      where: {
        id: req.session.id
      },
      include: [db.Location]
    }).then(function (dbCompany) {
      res.json(dbCompany);
    }).catch(function (err) {
      if (err) res.status(404).send(err);
      console.error(err);
    });
  },

  // Edit company
  // api/company/:id
  editCompany: function (req, res) {
    db.Company_profile.update(
      req.body, {
      company_name: req.body.company_name,
      ein: req.body.ein,
      account_type: req.body.account_type,
      where: {
        id: req.params.id,
      }
    }).then(function (dbCompany) {
      res.json(dbCompany);
    }).catch(function (err) {
      if (err) res.status(404).send(err);
      console.error(err);
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
    }).catch(function (err) {
      if (err) res.status(404).send(err);
      console.error(err);
    });
  }
}

