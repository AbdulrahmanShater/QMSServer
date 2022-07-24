const db = require("../util/database");
module.exports = class Company {
  constructor(id, name, email, created_at) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.created_at = created_at;
  }

  static fetchAll() {
    return db.execute("select * from company");
  }
};
