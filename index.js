//var con = require('./connection');
var mysql= require("mysql");
var express= require('express');
var app = express();

var con =  mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "pushpendra" 
});

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


app.get('/login-page',function(req, res){
    res.sendFile(__dirname+'/loginpg.html')
});

//setup of routing
//get the value from user
//app.post('/login-page',function(req, res){
  //res.send(req.body);
//}); 
app.post('/login-page', function(req, res){
    //console.log(req.body);
    var username = req.body.username;
    var password = req.body.pswrd;

    

//connet to database and put the data to table of user
    con.connect(function(error){
        if(error) throw error;
        
        var sql = "INSERT INTO login (username, password) VALUES ?";
        var values = [
          [username, password]
        ];
        
        con.query(sql, [values], function(error, result) {
          if (error) throw error;
          res.send('LOGIN SUCCESSFUL ' + result.insertId);
        });
    });
} );  

app.listen(7000);