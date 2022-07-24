const { end } = require("../util/database");
const db = require("../util/database");
const moment = require("moment");
module.exports = class Agent {
  constructor(id, startServiced, endServiced, created_at, queue_id, priority) {
    this.id = id;
    this.startServiced = startServiced;
    this.endServiced = endServiced;
    this.queue_id = queue_id;
    this.created_at = created_at;
    this.priority = priority;
  }

  static addAgent(priority, queue_id) {
    var mysqlTimestamp = moment(Date.now()).format("YYYY-MM-DD HH:mm:ss");
    console.log(mysqlTimestamp);
    console.log(priority);
    console.log(queue_id);
    let x;
    if ((priority = "Normal")) x = 2;
    else {
      x = 1;
    }

    return db.execute(
      `insert into agent (priority ,queue_id) values ( ${x}, ${queue_id}) `
    );
  }
  static getAgentFromQueue(queue_id) {
    return db.execute(
      `select * 
       from agent 
       where queue_id= ${queue_id} and startserviced is null ORDER BY priority ASC, created_at DESC`
    );
  }
  static setStartService(id) {
    var mysqlTimestamp = moment(Date.now()).format("YYYY-MM-DD HH:mm:ss");

    return db.execute(
      `UPDATE agent
       SET startserviced =${mysqlTimestamp} 
       WHERE id=${id}`
    );
  }
  static setEndService(id) {
    var mysqlTimestamp = moment(Date.now()).format("YYYY-MM-DD HH:mm:ss");

    return db.execute(
      `UPDATE agent
       SET endserviced = ${mysqlTimestamp}  
       WHERE id= ${id}`
    );
  }
};
