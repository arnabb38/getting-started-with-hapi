const Hapi = require('@hapi/hapi');

const server = new Hapi.Server({
    host: 'localhost',
    port: 3000
})

const init = async () => {

    server.route([
        {
            method: ['GET', 'PUT'],
            path: '/blog/pages/{page}',
            handler: function (request, response) {
                return 'Hello World from GET, from page number: ' + request.params.page;
            },
            config: {
                tags: ['blog'],
                notes: 'page route!!'
            }
        },

        {
            method: 'POST',
            path: '/',
            handler: function (request, response) {
                return 'Hello World from POST!';
            }
        }
    ])


    server.start(error => {
        if (error) {
            throw error;
        }
    });

    console.log('Server started on: ' + server.info.uri)

};

init();


