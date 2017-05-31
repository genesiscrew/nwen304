var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
var pg = require('pg');
var bodyParser = require('body-parser');
var connectionString = process.env.DATABASE_URL||"postgres://mirandange:300323076@depot:5432/mirandange_jdbc";
var client = new pg.Client(connectionString);
client.connect();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/views/index.html');
});

app.listen(port, function () {
    console.log('Example app listening on port ' + port);
});