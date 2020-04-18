const express = require('express');

const {createTable,
        addNewVisitor,
        listVisitors,
        deleteVisitor,
        updateVisitor,
        viewVisitor,
        deleteAllVisitor} = require("./index")

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}))

// createTable();
app.post('/add_visitor', (req, res) => {
    var visitorname = req.body.visitorname;
    var assistedby = req.body.assistedby;
    var age = req.body.age;
    var date = req.body.date;
    var time = req.body.time;
    var comment = req.body.comment;

    const visitor = addNewVisitor(visitorname,assistedby, age, date, time, comment)
    res.status(200).json({'message': 'visitor added'})
})

app.get('/view_visitor:id', (req, res) => {
    const person = viewVisitor();
    res.status(200).json({'message': 'results ready'});
})

app.get('/view-all-visitors', (req, res) => {
    const visitor = listVisitors();
    res.status(200).json({'message': 'results are ready'})
})

app.delete('/delete-all', (req, res) => {
    const visitor = deleteAllVisitor();
    res.status(200).json({'message': 'results are ready'})
})

app.put('/update:id', (req, res) => {
    var visitorname = req.body.visitorname;
    var assistedby = req.body.assistedby;
    var age = req.body.age;
    var date = req.body.date;
    var time = req.body.time;
    var comment = req.body.comment;

    const visitorId = req.params.visitorId;
    res.status(200).json({'message': 'results are ready'})
})


const server = app.listen(5000, function () {
    const host = server.address().address
    const port = server.address().port
    
    console.log("This is where the magic happens http://%s:%s", host, port)
 })