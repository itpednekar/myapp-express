var express = require('express');
var routesEmployee = require('./routes/employee');
var app = express();

app.use(express.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use("/employee",routesEmployee);

app.listen(9898,()=>{
    console.log("Server started on port no 9898");
})