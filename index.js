"use strict";

require("./gitignore/node_modules/dotenv").config();

const { Client } = require("pg");
const client = new Client({
  user: "user",
  host: "localhost",
  database: "db",
  password: "pass",
  port: 5432,
});

execute();

async function execute() {
  try {
    await client.connect();
    console.log("Connected successfully");
    const results = await client.query("select * from visitors");
    console.table(results.rows);
  } catch (e) {
    console.log(e);
  }
}

createTable();
async function createTable() {
  try {
    const table = await client.query(
      `CREATE TABLE IF NOT EXISTS 
         Visitors(
          visitor_id SERIAL PRIMARY KEY,
          visitor_name VARCHAR(30),
          visitor_age INTEGER,
          date_Of_visit DATE,
          time_Of_visit TIME,
          assistant VARCHAR(30),
          comments VARCHAR(350)
      );`
    );
  } catch (e) {
    console.log(e);
  }
}

addNewVisitor();

async function addNewVisitor() {
  try {
    await client.query(
      "INSERT INTO visitors VALUES ($1, $2, $3, $4, $5, $6, $7)",
      [2, "mpho", 21, "10/05/2020", "14:00", "thabo", "no comment"]
    );
    console.log("vistior added");
  } catch (e) {
    console.log(e);
  }
}

listVisitors();
async function listVisitors() {
  try {
    const visitors = await client.query(
      "SELECT visitor_id, visitor_name FROM visitors"
    );
    console.table(visitors.rows);
  } catch (e) {
    console.log(e);
  }
}

deleteVisitor();
async function deleteVisitor() {
  try {
    const visitor = await client.query(
      "DELETE FROM visitors WHERE visitor_id=$1",
      [2]
    );
    console.log("visitor deleted");
  } catch (e) {
    console.log(e);
  }
}

updateVisitor();
async function updateVisitor() {
  try {
    await client.query(
      "UPDATE visitors SET visitor_name=$2,visitor_age=$3,date_of_visit=$4,time_of_visit=$5,assistant=$6,comments=$7 WHERE visitor_id =$1",
      [1, "lebo", 28, "12/06/2020", "15:00", "thabo", "information updated"]
    );
    console.log("visitor updated");
  } catch (e) {
    console.log(e);
  }
}

viewVisitor();
async function viewVisitor() {
  try {
    const visitor = await client.query(
      "SELECT * FROM visitors WHERE visitor_id = $1",
      [5]
    );
    console.table(visitor.rows);
  } catch (e) {
    console.log(e);
  }
}
deleteAllVisitor();
async function deleteAllVisitor() {
  try {
    await client.query("DELETE FROM visitors");
    console.log("Visitors deleted! ");
  } catch (e) {
    console.log(e);
  }
  //     finally {
  //   await client.end()
  //   console.log("Client disconnected")

  // }
}

module.exports = {
  createTable,
  addNewVisitor,
  listVisitors,
  deleteVisitor,
  updateVisitor,
  viewVisitor,
  deleteAllVisitor,
};
