var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var repo = require('../database/index');
var data = require('../data')

var app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var options = {
  api: 'https://api.github.com',
  url: '',
  method: 'GET'
}

app.post('/repos/import', function (req, res) {
  // TODO
  console.log(req.body)
  res.send(data);
});

app.get('/repos', function (req, res) {
  // TODO

  //console.log(this)
  res.end();
});

var port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

