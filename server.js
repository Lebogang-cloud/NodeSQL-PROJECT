const express = require('express');
const path = require('path');

const { Client } = require('pg');
const client = new Client({
  user: "user",
  host: "localhost",
  database: "db",
  password: "pass",
  port: 5432,
});

// Database
const {
  addNewVisitor,
  deleteVisitor,
  deleteVisitors,
  viewVisitor,
  viewVisitors,
  updateVisitor,
} = require('./index');

// Create app
const app = express();


// Static file
app.get('/visitors', async (req, res) => { 
 

  res.send(JSON.stringify(visitors));
});

// Add visitor
app.post('/add-new-visitor', async (req, res) => {
  // Inputs
  let name = req.body.name;
  let age = req.body.age;
  let date = req.body.date_of_visit;
  let time = req.body.time_of_visit;
  let assistant = req.body.assistant;
  let comments = req.body.comments;

  // Save visitor
  const visitor = await addNewVisitor(
    name,
    age,
    date,
    time,
    assistant,
    comments
  );

  res.status(200).json({
    status: 'ok',
    visitor: visitor[0],
  });
});

// Delete visitor
app.delete('/delete-visitor/:id', async (req, res) => {
  const id = req.params.id;

  // Delete visitor
  const visitor = await deleteVisitor(id);

  res.status(200).json({
    status: 'ok',
    visitor: visitor[0],
  });
});

// View visitors
app.get('/view-visitors', async (req, res) => {
  // View visitors
  const visitors = await viewVisitors();

  res.status(200).json({
    status: 'ok',
    visitors: visitors,
  });
});

const server = app.listen(5000, () =>
  console.log('Express Server is running on Port: 5000')
);

module.exports = server;

// const express = require("express");
// const path = require("path");


// const {
//   createTable,
//   addNewVisitor,
//   listAllVisitors,
//   deleteVisitor,
//   updateVisitor,
//   selectVisitor,
//   deleteAllVisitor,
// } = require("../index.js");

// const app = express();

// app.use(express.json());
// app.use(express.urlencoded({extended: true}))

   
// app.get('/html', () => {
//     res.status(200).sendfile()
// })

// app.get('/', (req, res) => {
//   res.status(200).json({
//     visitorname: "lebo",
//     assistedby: "Thabo",
//     age: 30,
//     date: "12/05/2020",
//     time: "15:00",
//     comment: "what a wow"
//   })
// })

// app.post("/addNewVisitor", (req, res) => {
//   var visitorname = req.body.visitorname;
//   var assistedby = req.body.assistedby;
//   var age = req.body.age;
//   var date = req.body.date;
//   var time = req.body.time;
//   var comment = req.body.comment;

//   // const newVisitor = require("./index", addNewVisitor);
//   res.status(200).json({
//     visitorname: visitorname,
//     assistedby: assistedby,
//     age: age,
//     time: time,
//     date: date,
//     comment: comment
//   });
// });

// app.get("/", (req, res) => {
//   return res.status(200).send({ status: "Okay" });
// });

// app.get("/selectVisitor", (req, res) => {
//   const visitor = require("./index", selectVisitor);

//   return res.status(200).send({ status: "ok" });
// });

// app.get("/listAllVisitors", (req, res) => {
//   const newVisitor = require("./index", listAllVisitors);
//   res.status(200).json({ status: "ok" });
// });

// app.delete("/deleteVisitor/:id", (req, res) => {
//   const visitor_Id = req.params.visitor_Id;
//   const visitor = require("./index", deleteVisitor);
//   visitor.deleteVisitor(visitor_Id)
//   .then(()=>{
//     res.status(200).json({ status: "ok" });
//   })
//     .catch (err => {
//       res.status.json({err:err})
//   });
  
// });

// app.delete("/deleteAllVisitor", (req, res) => {
//   const newVisitor = require("./index", deleteAllVisitor);
//   res.status(200).json({ status: "ok" });
// });

// app.put("/updateVisitor", (req, res) => {
//   var visitorname = req.body.visitorname;
//   var assistedby = req.body.assistedby;
//   var age = req.body.age;
//   var date = req.body.date;
//   var time = req.body.time;
//   var comment = req.body.comment;

//   const newVisitor = ("./index", updateVisitor);
//   const visitor_Id = req.params.visitor_Id;
//   res.status(200).json({ message: "results are ready" });
// });


// const server = app.listen(5001, function () {
//   const host = server.address().address;
//   const port = server.address().port;

//   console.log("This is where the magic happens http://%s:%s", host, port);
// });

// (module.exports = server), app;
