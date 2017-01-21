var express = require('express');
var server = express();

var port = 8080; // this is the door to the static_server

server.get('/', function(request, response){
    response.sendFile('index.html', {root: __dirname + '/public/html'});
});

server.listen(port, function(){
  console.log('Now listening on Port', port)
});
