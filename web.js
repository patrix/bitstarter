var express = require('express');

var app = express.createServer(express.logger());

var html = fs.readFileSync('index.html');
var buf = new Buffer(html);	

app.get('/', function(request, response) {
//  response.send('Hello World 2!');
  response send(html);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
