const Agent = require("../models/agent");
exports.addAgent = async (req, res, next) => {
  try {

    const [response] = await Agent.addAgent(
      req.body.priority,
      req.body.queue_id
    );
    res.status(200).json(response);
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
};
exports.getAgent = async (req, res, next) => {
  try {

    const [response] = await Agent.addAgent(
      req.body.priority,
      req.body.queue_id
    );
    res.status(200).json(response);
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
};
