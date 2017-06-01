var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
var pg = require('pg');
var path = require('path');
var bodyParser = require('body-parser');
var connectionString = process.env.DATABASE_URL||"postgres://mirandange:300323076@depot:5432/mirandange_jdbc";
var client = new pg.Client(connectionString);
client.connect();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.listen(port, function () {
    console.log('Example app listening on port ' + port);
});

app.get('/', function (req, res) {
    res.render('index', {
		title: "hello!"    
    });
});

app.get('/authors', function (req, res) {
    res.render('authors', {
    });
});

app.get('/books', function (req, res) {
    res.render('books', {
    });
});

app.get('/genres', function (req, res) {
    res.render('genres', {
    });
});

app.get('/search', function (req, res) {
    res.render('search', {
    });
});

