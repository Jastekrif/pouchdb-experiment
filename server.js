var port = process.argv[2] || process.env.PORT || 8080;

var express = require('express');
var join = require('path').join;

var app = express();

var webClient = join(__dirname, 'web-client');
app.use(express.static(webClient));

app.listen(port, function () {
    console.log('Server started on port', port);
});
