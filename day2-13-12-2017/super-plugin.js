    function superPlugin(fastify, opts, next) {
        fastify.decorate('superMethod', () => {
            console.log(`Secret Code : ${opts.secretCode}`);
        })
        next();
    }