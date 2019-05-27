const fastify = require('fastify')();

fastify.get('/', (request, reply) => {
    const fs = require('fs');
    const stream = fs.createReadStream('hello.txt', 'utf-8');
    reply.send(stream);
})

fastify.listen(3000, (err, address) => {
    if (err) {
        console.log(err);
    } else {
        const fs = require('fs');
        const stream = fs.createReadStream('hello.txt', 'utf-8');
        reply.send(stream);
    }
})