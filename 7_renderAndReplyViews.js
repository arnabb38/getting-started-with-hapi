const Hapi = require('@hapi/hapi');
const Vision = require('@hapi/vision');
const Handlebars = require('handlebars');


const server = new Hapi.Server({
    host: 'localhost',
    port: 3000
})

const init = async () => {

    await server.register(Vision);


    server.views({
        engines: {
            html: Handlebars
        },
        path: 'views',
        layout: 'default-layout'
    })

    server.route({
        method: 'GET',
        path: '/{name}',
        handler: (request, response) => {
            return response.view('index', {
                name: request.params.name
            })
        }
    })


    server.start();

    console.log('Server started on: ' + server.info.uri)

};


init();


