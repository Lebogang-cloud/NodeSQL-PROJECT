const { Client } = require("pg");
const client = new Client({
  user: "user",
  host: "localhost",
  database: "db",
  password: "pass",
  port: 5432,
});

class Visitors {
  constructor(
    Visitors_id,
    Visitor_name,
    Visitor_age,
    Date_Of_Visit,
    Time_Of_Visit,
    Assistant_Name,
    Comments
  ) {
    this.Visitors_id = Visitors_id;
    this.Visitor_name = Visitor_name;
    this.Visitor_age = Visitor_age;
    this.Date_Of_Visit = Date_Of_Visit;
    this.Time_Of_Visit = Time_Of_Visit;
    this.Assistant_Name = Assistant_Name;
    this.Comments = Comments;
  }

  addNewVisitor() {
    client
      .connect()
      .then(() => console.log("Connected successfully"))
      .then(() => client.query("select * from visitors"))
      .then(() =>
        client.query(
          "INSERT INTO visitors(Visitor_id, Visitor_Name, this.Visitor_Age, Date_Of_Visit, Time_Of_Visit, Assistant_Name, Comments) VALUES ($1, $2, $3, $4, $5, $6, $7)",
          [id, name, age, date, time, assistedBy, comments]
        )
      )
      .then(() => console.log("Visitors values have been saved"))
      .catch((e) => console.log(e))
      .finally(() => client.end());
  }

  listAllVisitors() {
    client
      .connect()
      .then(() => client.query(SQL))
      .then(() => console.log("Return visitor names and ids"))
      .catch((e) => console.log(e))
      .finally(() => client.end());
  }

  deleteVisitor() {
    client
      .connect()
      .then(() =>
        client.query("DELETE FROM visitors WHERE visitor_ID=$1;", [id])
      )
      .then(() => console.log("Visitor information has been deleted"))
      .catch((e) => console.log(e))
      .finally(() => client.end());
  }

  updateVisitor() {
    client
      .connect()
      .then(() =>
        client.query("UPDATE visitors SET ${where}= $2 WHERE visitor_ID=$1;", [
          id,
          value,
        ])
      )
      .then(() => console.log("Visitor information have been updated"))
      .catch((e) => console.log(e))
      .finally(() => client.end());
  }

  selectVisitor() {
    client
      .connect()
      .then(() =>
        client.query("SELECT * FROM visitors WHERE visitor_ID=$1;", [id])
      )
      .then(() => console.log(results.row))
      .catch((e) => console.log(e))
      .finally(() => client.end());
  }

  deleteAllVisitors() {
    client
      .connect()
      .then(() => client.query("DELETE FROM visitors;"))
      .then(() => console.log(" Visitors haven been deleted"))
      .catch((e) => console.log(e))
      .finally(() => client.end());
  }
}

module.exports = Visitors;
