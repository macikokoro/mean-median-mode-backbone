'use strict';

var express = require('express');
var http = require('http');

var app = express();

app.use(express.static(__dirname + '/build'));

var server = http.createServer(app);

var port = process.env.PORT || 3000;

var server = app.listen(port, function() {
    console.log('Hello from localhost: %d', server.address().port);
});
