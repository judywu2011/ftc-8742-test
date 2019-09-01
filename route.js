
var routes = [];

var first =  {
        method: 'GET',
        path: '/',
        handler: function (request, reply) {
            reply('Hello world!!');
        }
};

routes.push(first);


module.exports = routes;