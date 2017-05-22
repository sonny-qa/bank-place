var express = require('express');

var bodyParser = require('body-parser')
var app = express();
var db = require('./db.js')
var port =4000

const environment = process.env.NODE_ENV || 'development';

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json());

require('./routes')(app);

app.listen(3001);
console.log("Jammin\' on port 3001...");

