const Service = require("../models/service");
exports.getServices = async (req, res, next) => {
  try {
    const [services] = await Service.fetch(req.query.id);
    res.status(200).json(services);
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
};
