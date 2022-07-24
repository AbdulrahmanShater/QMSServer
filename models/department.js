const db = require("../util/database");
module.exports = class Department {
  constructor(id, company_id, name, status, created_at) {
    this.id = id;
    this.name = name;
    this.company_id = company_id;
    this.created_at = created_at;
    this.status = status;
  }

  static fetchAll() {
    return db.execute("select * from department");
  }
};
