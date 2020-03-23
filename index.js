const {Visitors} = require('pg'); // Connect to a database.
//  create a visitor object, which will connect to the database
let visitor = new Visitors ({   
  user: "user",
  host: "postgres",
  database: "db",
  password: "pass",
  port: 5432

})

visitor.connect()  //returns promise
.then(() => console.log("Connected successfully")) //tells you are connected
.then(() => visitor.query("select * from visitors")) // query from the table to get table
.then((results => console.table(results.row)))
.catch(e => console.log(err))    // catches an error
.finally(() => visitor.end())     // is used to end the connection

module.exports = Visitors;
