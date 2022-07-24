const department = require("../models/department");
exports.getAllDepartments = async (req, res, next) => {
  try {
    const [allDept] = await department.fetchAll();
    res.status(200).json(allDept);
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
};
