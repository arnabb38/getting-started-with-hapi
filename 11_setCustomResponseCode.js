const Hapi = require('@hapi/hapi');
const Boom = require('boom');

const server = new Hapi.Server({
    host: 'localhost',
    port: 3000
})

const init = async () => {

    server.route(
        {
            method: 'GET',
            path: '/',
            handler: function (request, response) {
                return 'Hello World from GET!!';
            }
        }
    )

    server.route(
        {
            method: 'GET',
            path: '/code',
            handler: function (request, response) {

                const data = {
                    id: 123,
                    name: 'Arnab'
                }

                return response.response(data).code(201);
            }
        }
    )

    server.route(
        {
            method: 'GET',
            path: '/boom',
            handler: function (request, response) {
                throw Boom.unauthorized('You are not authorized! Error response by Boom!')
            }
        }
    )

    server.route({
        method: 'GET',
        path: '/empty',
        config: {
            response: {
                emptyStatusCode: 204
            },
            handler: (request, response) => {
                return response;
            }
        }
    })

    server.start(error => {
        if (error) {
            throw error;
        }
    });

    console.log('Server started on: ' + server.info.uri)

};

init();


