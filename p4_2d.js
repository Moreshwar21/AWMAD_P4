var mysql = require('mysql');

var con = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "password",
  database: "AWMAD"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM team", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});