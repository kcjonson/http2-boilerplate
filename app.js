var koala = require('koala');
var fs = require('fs');
var spdy = require('spdy')






var app = koala();

app.use(function* () {
	yield this.fileServer.send('app.html');
});

var server = spdy.createServer({
    key: fs.readFileSync('ssl.key'),
    cert: fs.readFileSync('ssl.crt'),
}, app.callback());

server.listen(3000);