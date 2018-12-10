exports.option = {
    routePrefix: '/documentation',
    exposeRoute: true,
    swagger: {
        info: {
            title: "Fastify-api",
            description: " blazing fast api with mongoose, fastify and boom",
            version: 1.0
        },
        externalDocs: {
            url: 'fadtify.io',
            description: 'find more info here'
        },
        host: 'localhost',
        schemes: ['http'],
        consumes: ['application/json'],
        produces: ['application/json']
    }
}