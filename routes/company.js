const express = require("express");

const companyController = require("../controllers/company");

const routes = express.Router();

routes.get("/", companyController.getAllCompanies);

module.exports = routes;
