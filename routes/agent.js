const express = require("express");

const agentController = require("../controllers/agent");

const routes = express.Router();

routes.post("/", agentController.addAgent);
routes.get("/", agentController.addAgent);

module.exports = routes;
