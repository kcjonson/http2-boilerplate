var express = require('express')
var fs = require('fs');
var spdy = require('spdy')

var app = express()

app.get('/', function (req, res) {
	res.sendFile('./app.html', { root : __dirname})
})

app.get('/conbats.gif', function (req, res) {
	res.sendFile('./conbats.gif', { root : __dirname})
})

app.get('/images/:id', function (req, res) {
	res.sendFile('./images/' + req.params.id, { root : __dirname})
})

var options = {
  key: fs.readFileSync('ssl.key'),
  cert: fs.readFileSync('ssl.crt')
};

spdy.createServer(options, app).listen(8080);
