const Company = require("../models/company");
exports.getAllCompanies = async (req, res, next) => {
  try {
    const [allCompanies] = await Company.fetchAll();
    res.status(200).json(allCompanies);
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
};
