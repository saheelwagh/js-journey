const FASTIFY = require("fastify")({
  logger: true
});
const MONGOOSE = require("mongoose");
const ROUTES = require('./routes');
FASTIFY.get("/", async (request, reply) => {
  return {
    hello: "world"
  };
});

//Import Swagger Options
const swagger = require(`./config/swagger`)
// Register Swagger
FASTIFY.register(require(`fastify-swagger`), swagger.option)


ROUTES.forEach((route, index) => {
  FASTIFY.route(route)
})
const start = async () => {
  try {
    await FASTIFY.listen(3000);
    FASTIFY.swagger();
    FASTIFY.log.info(`server running on ${FASTIFY.server.address().port}`);

  } catch (err) {
    FASTIFY.log.error(err);
    process.exit(1);
  }
};
start()
MONGOOSE.connect(`mongodb://localhost/mycargarage`)
  .then(() => console.log(`MongoDB connected…`))
  .catch(err => console.log(err));