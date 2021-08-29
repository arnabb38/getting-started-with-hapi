const Hapi = require('@hapi/hapi');

const server = new Hapi.Server({
    host: 'localhost',
    port: 3000
})

const init = async () => {

    server.route({
        method: 'GET',
        path: '/',
        handler: (request, response) => {
            const data = {
                id: 123,
                name: "Arnab",
                isDev: true,
                func: function(){
                    return 1;
                }
            }

            return data;
        }
    })


    server.start();

    console.log('Server started on: ' + server.info.uri)

};

init();


