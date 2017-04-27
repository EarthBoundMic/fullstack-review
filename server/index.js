var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var repo = require('../database/index');

var app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.post('/repos/import', function (req, res) {
  // TODO
  req.body.repo = repo;
  var ugh = new repo({
    username: 'ugh',
    url: 'shit.org',
    created_at: new Date()
  })
 //console.log(ugh)
  res.status(200).send(req.body);
});

app.get('/repos', function (req, res) {
  // TODO

  
});

var port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

