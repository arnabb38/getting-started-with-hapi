const { server } = require("@hapi/hapi");

exports.register = (server, options, next) => {

    server.route({
        method: 'GET',
        path: '/path',
        handler: (request, response) => {
            return 'Hey there!';
        }
    })

    console.log(options);

    server.ext('onPreHanddler', (request, response) => {

    })

    next();
}

exports.register.attributes = {
    name: 'custom-plugin',
    version: '1.0.0'
}