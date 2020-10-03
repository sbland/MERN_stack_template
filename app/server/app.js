const server = require('./server');
const config = require('./src/config');
const logger = require('./src/logger');

/* ====== Start Server ====== */
server.listen(config.PORT, (request, result) => {
  logger(`Starting Server on port ${config.PORT}`);
})
