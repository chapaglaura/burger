var mysql = require('mysql');

var connection = mysql.createConnection({
    host: "us-cdbr-iron-east-03.cleardb.net",
    port: 3306,
    user: "b590fff87a2e0a",
    password: "6c273c1b",
    database: "heroku_616fa32d54ce579"
  });

  connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });

  module.exports = connection;