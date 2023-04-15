var mysql= require("mysql");


// Create a MySQL connection pool
var con =  mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "pushpendra" 
});

//checking the connection
 con.connect(function(error){
    if(error) throw error;
    console.log("connect");
 });

//module.exports = con;

