const express = require('express');
const path = require('path');

const {createTable,
        addNewVisitor,
        listAllVisitors,
        deleteVisitor,
        updateVisitor,
        selectVisitor,
        deleteAllVisitor} = require("./index")

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}))


app.post('/new-visitor', (req, res) => {
    var visitorname = req.body.visitorname;
    var assistedby = req.body.assistedby;
    var age = req.body.age;
    var date = req.body.date;
    var time = req.body.time;
    var comment = req.body.comment;

    const visitor = addNewVisitor(visitorname,assistedby, age, date, time, comment)
    res.status(200).json({'message': 'visitor added'})
})

app.get('/', (req, res) => {
    return res.status(200).send({status:'Okay'})
})

app.get('/', (req, res) => {
    const visitor = selectVisitor();
    return res.status(200).send({status: 'ok'});
})

app.get('/view-all-visitors', (req, res) => {
    const visitor = listAllVisitors();
    res.status(200).json({status: 'ok'});
})
app.delete('/', (req, res) => {
    const visitor = deleteVisitor();
    res.status(200).json({status: 'ok'});
})


app.delete('/', (req, res) => {
    const visitor = deleteAllVisitor();
    res.status(200).json({status: 'ok'});
})

app.put('/', (req, res) => {
    var visitorname = req.body.visitorname;
    var assistedby = req.body.assistedby;
    var age = req.body.age;
    var date = req.body.date;
    var time = req.body.time;
    var comment = req.body.comment;

    const visitorId = req.params.visitorId;
    res.status(200).json({'message': 'results are ready'})
})


const server = app.listen(5001, function () {
    const host = server.address().address
    const port = server.address().port
    
    console.log("This is where the magic happens http://%s:%s", host, port)
 })

 module.exports = server, app;