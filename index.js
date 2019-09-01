
var Hapi = require('hapi');
var server = new Hapi.Server(3000);

var Routes = require('./route');


server.route(Routes);

server.start(function() {
    console.log('Server test running at:', server.info.uri);
})
