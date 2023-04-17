const express = require('express');
const mysql = require('mysql');
const ejs = require('ejs');

const app = express();

// Set the view engine to ejs
app.set('view engine', 'ejs');

// Create a connection to the MySQL database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'your_mysql_username',
  password: 'your_mysql_password',
  database: 'your_database_name',
});

// Connect to the database
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to the MySQL database!');
});

// Set up a route to handle search requests
app.get('/search', (req, res) => {
  // Get the user's search query from the URL query string
  const searchQuery = req.query.q;

  // Perform a search query on the database
  connection.query(`SELECT * FROM your_table_name WHERE column_name LIKE '%${searchQuery}%'`, (err, results) => {
    if (err) throw err;

    // Render the search results using the ejs template engine
    res.render('search_results', { results });
  });
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000!');
});
