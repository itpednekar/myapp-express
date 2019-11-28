var express = require('express');
var mysql = require('mysql');

var router = express();

var connection =  mysql.createConnection({
    host : "localhost",
    database : "Angular",
    user : "dac",
    password : "dac"
})
connection.connect();
router.use(express.json());

router.get("/",(request,response)=>{
   queryText = "select * from Employee";
   console.log(queryText);
   connection.query(queryText,(err,result)=>{
       if(err == null)
       {
            response.send(JSON.stringify(result));
       }
       else
       {
        response.send(JSON.stringify(err));
       }
   })
})

router.get("/:Id",(request,response)=>{
    queryText = `select * from Employee where Id =${request.params.Id}`;
    console.log(queryText);
    connection.query(queryText,(err,result)=>{
        if(err == null)
        {
             response.send(JSON.stringify(result));
        }
        else
        {
         response.send(JSON.stringify(err));
        }
    })
 })

router.post("/",(request,response)=>{
    const {Id,Name,City,Email} = request.body;
    queryText = `insert into Employee values (${Id},'${Name}','${City}','${Email}') `;
    console.log(queryText);
    connection.query(queryText,(err,result)=>{
        if(err == null)
        {
             response.send(JSON.stringify(result));
        }
        else
        {
         response.send(JSON.stringify(err));
        }
    })
 })

 router.put("/:Id",(request,response)=>{
    const {Name,City,Email} = request.body;
    queryText = `update Employee set Name= '${Name}', City= '${City}', Email= '${Email}' where Id = ${request.params.Id} `;
    console.log(queryText);
    connection.query(queryText,(err,result)=>{
        if(err == null)
        {
             response.send(JSON.stringify(result));
        }
        else
        {
         response.send(JSON.stringify(err));
        }
    })
 })

 router.delete("/:Id",(request,response)=>{
    queryText = `delete from Employee where Id = ${request.params.Id}`;
    console.log(queryText);
    connection.query(queryText,(err,result)=>{
        if(err == null)
        {
             response.send(JSON.stringify(result));
        }
        else
        {
         response.send(JSON.stringify(err));
        }
    })
 })



module.exports = router;