const express = require("express");
const companyRoutes = require("./routes/company");
const departmentRoutes = require("./routes/department");
const servicesRoutes = require("./routes/service");
const agentRoutes = require("./routes/agent");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const ports = process.env.port || 3001;
app.use(function (req, res, next) {
  // Website you wish to allow to connect
  // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

  res.setHeader("Access-Control-Allow-Origin", "*");

  // Request methods you wish to allow
  res.setHeader("Access-Control-Allow-Methods", "POST");

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
});
app.use("/agent", agentRoutes);
app.use("/companies", companyRoutes);
app.use("/departments", departmentRoutes);
app.use("/services", servicesRoutes);
app.listen(ports, () => {
  console.log("listening on port ${ports} ");
});
