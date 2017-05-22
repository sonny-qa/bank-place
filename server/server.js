var express = require('express');

var bodyParser = require('body-parser')
var app = express();
var db = require('./db.js')
var port =4000

const environment = process.env.NODE_ENV || 'development';


const pg = require('pg');
const connectionString = process.env.DATABASE_URL || 'postgres://goytsjhxznendk:04597c9ae007888488cf04d15ef050093d87065aad4facf2df2d50f792aa0137@ec2-23-23-227-188.compute-1.amazonaws.com:5432/db2iu3epi1gq3c?ssl=true';


pg.defaults.ssl = true;
pg.connect(connectionString, function(err, client) {
  if (err) throw err;
  console.log('Connected to postgres! Getting schemas...');

  client
    .query('CREATE TABLE IF NOT EXISTS users (ID SERIAL PRIMARY KEY, First_Name VARCHAR, Last_Name VARCHAR, email VARCHAR, apt_num INTEGER, address VARCHAR(100))')
    .on('row', function(row) {
      console.log(JSON.stringify(row));
    });
});



app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json());

require('./routes')(app);

app.listen(3001);
console.log("Jammin\' on port 3001...");
var client = new pg.Client();
module.exports = client