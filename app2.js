// npm  install cron

// Initialization
var fs = require('fs');
var express = require('express');
var app = express();
var cronJob = require('cron').CronJob;
var bodyParser = require('body-parser')
var people = [];

// parse body
app.use(bodyParser());

// Register CronJob
new cronJob('0 0 8 * * 1-5', function () {
	// Cleanup each weekday @ 8:00am
	people = [];
}, null, true, 'America/Los_Angeles');

app.get('/', function(req, res) {
  content = fs.readFileSync('food.html');
  res.send(content.toString());
});

app.get('/notie.js', function(req, res) {
  content = fs.readFileSync('notie.js');
  res.send(content.toString());
});

app.get('/people.json', function(req, res) {
  //people = ['Chris', 'Fiona', 'Bernd'];
  res.send(JSON.stringify(people));
});

app.post('/signup', function(req, res) {
	console.log(req.body);
	people.push(req.body.name);
});

var server = app.listen(10102, function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log('server running');
  console.log(host);
  console.log(port);
});
