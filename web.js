var express = require('express');
var app = express();
var fs=require('fs');

app.use(express.logger());

app.get('/', function(request, response) {
  var content=String(fs.readFileSync("index.html"));
  response.send(content);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
