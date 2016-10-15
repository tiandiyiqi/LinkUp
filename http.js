var express = require('./node_modules/express');
var compression = require('compression');
var app = express();
var server = require('http').createServer(app);

app.use(compression());
app.use(express.static(__dirname + '/'));

server.listen(process.env.PORT || 80);

