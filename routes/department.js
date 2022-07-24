const express = require("express");

const departmentController = require("../controllers/department");

const routes = express.Router();

routes.get("/", departmentController.getAllDepartments);

module.exports = routes;
