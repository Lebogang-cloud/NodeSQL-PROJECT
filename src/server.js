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


app.post('/addNewVisitor', (req, res) => {
    var visitorname = req.body.visitorname;
    var assistedby = req.body.assistedby;
    var age = req.body.age;
    var date = req.body.date;
    var time = req.body.time;
    var comment = req.body.comment;

    const newVisitor = require('./index', addNewVisitor);
    res.status(200).json({"message":"It is okay!"})
})

app.get('/', (req, res) => {
    return res.status(200).send({status:'Okay'})
})

app.get('/selectVisitor', (req, res) => {
    const visitor = require('./index' , selectVisitor);

    return res.status(200).send({status: 'ok'});
})

app.get('/listAllVisitors', (req, res) => {
    const newVisitor = require('./index', listAllVisitors)
    res.status(200).json({status: 'ok'});
})

app.delete('/deleteVisitor', (req, res) => {
    const visitor_Id = req.params.visitor_Id
    const visitor = require('./index', deleteVisitor);
    res.status(200).json({status: 'ok'});
})


app.delete('/deleteAllVisitor', (req, res) => {
    const newVisitor = require('./index', deleteAllVisitor);
    res.status(200).json({status: 'ok'});
})

app.put('/updateVisitor', (req, res) => {
    var visitorname = req.body.visitorname;
    var assistedby = req.body.assistedby;
    var age = req.body.age;
    var date = req.body.date;
    var time = req.body.time;
    var comment = req.body.comment;

    const newVisitor = ('./index', updateVisitor) 
    const visitor_Id =req.params.visitor_Id;
    
    res.status(200).json({'message': 'results are ready'})
})


const server = app.listen(5001, function () {
    const host = server.address().address
    const port = server.address().port
    
    console.log("This is where the magic happens http://%s:%s", host, port)
 })

 module.exports = server, app;