const fastify = require('fastify')({
    logger: true
});

fastify.get(`/`, (Request, Reply) => {
    Reply.send({
        hello: 'World'
    });
});

fastify.listen(3000, err => {
    if (err) {
        fastify.log.error(err);
        process.exit(1)
    } else {
        fastify.log.info(`server listening on ${fastify.server.address().port}`)
    }
})