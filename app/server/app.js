require('dotenv').config();
const server = require('./src/server');
const config = require('./src/config');
const pino = require('pino'); // Logging
const logger = pino({ level: process.env.LOG_LEVEL || 'info' });

/* ====== Start Server ====== */
server.listen(config.PORT, () => {
  logger.info('Server running on port %d', config.PORT);
});
