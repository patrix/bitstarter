var express = require('express');

var app = express.createServer(express.logger());

//var html = fs.readFileSync('index.html');
//var buf = new Buffer(html);	

app.get('/', function(request, response) {
//  response.send('Hello World 2!');
var content;
var fs = require('fs');
var buff = new Buffer();
response.send(buffer.toString('utf-8', fs.readFileSync('index.html')))});
//, function (err, data) {
//content = data;
//});
//var buf = new Buffer(html.length);
//buf.write(html)
//  response.send(content);
//});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
