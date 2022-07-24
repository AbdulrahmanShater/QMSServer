const express = require("express");

const serviceController = require("../controllers/service");

const routes = express.Router();

routes.get("/", serviceController.getServices);

module.exports = routes;
