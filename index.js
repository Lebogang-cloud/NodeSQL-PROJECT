const { Client } = require("pg");
const client = new Client({
  user: "user",
  host: "localhost",
  database: "db",
  password: "pass",
  port: 5432,
});

client
  .connect()
  .then(() => console.log("Connected successfully"))
  .then(() => client.query("select * from visitor"))
  .then((results) => console.table(results.rows))
  .then((addNewVisitor) =>
    client.query(
      "INSERT INTO visitor(Visitorid, VisitorName, VisitorsAge, Date, Time, Assistedby, Comment) VALUES (6, 'Nandi', 18, '12/03/2020', '13:25', 'Amanda', 'No comment')"
    )
  )
  .then((results) => console.table(results.rows))

  .then((listAllVisitors) =>
    client.query("select VisitorName, Visitorid FROM visitor;")
  )
  .then((results) => console.table(results.rows))

  .then((deletevisitor) =>
    client.query("DELETE FROM visitor WHERE Visitorid= 5")
  )
  .then(() => console.log("Visitor deleted"))

  .then((selectVisitor) =>
    client.query("SELECT * FROM visitor WHERE visitorid = 3")
  )
  .then((results) => console.table(results.rows))

  .then((updateVisitor) =>
    client.query(
      "UPDATE visitor SET visitorname = 'River' WHERE visitorid = 3;"
    )
  )
  .then((results) => console.table(results.rows))

  .then((deleteAllVisitors) => client.query("DELETE FROM visitor"))
  .then(() => console.log("Visitor has been selected"))
  .catch((e) => console.log(e))
  .finally(() => client.end());



// module.exports = Visitors;
