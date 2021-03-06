var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));

app.get('/', function(req, res) {
  res.sendfile('./index.html');
});

var port = process.env.PORT || 8080;

app.listen(port, function() {
  console.log('Our app is running on http://localhost:' + port);
});

module.exports = app;
