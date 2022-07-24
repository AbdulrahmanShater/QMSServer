const db = require("../util/database");
module.exports = class Service {
  constructor(id, name, department_id, created_at) {
    this.id = id;
    this.name = name;
    this.department_id = department_id;
    this.created_at = created_at;
  }

  static fetch(dep_id) {
    return db.execute("select * from service where department_id = " + dep_id);
  }
};
