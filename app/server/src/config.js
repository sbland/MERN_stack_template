/*
 * Contains default config.
 * This can be overriden using environment variables
 */

module.exports = {
    DATABASE: process.env.DATABASE || 'data',
    MONGO_URL: process.env.MONGO_URL || 'mongodb://127.0.0.1:27017',
    DEMO_DATA_FILE: process.env.DEMO_DATA_FILE || './public/demo-data/demo-data.json',
    PORT: process.env.PORT || 5000,
    SECRET: process.env.SECRET || 'NOTFORPRODUCTION',
    VALID_EMAIL_DOMAIN: process.env.VALID_EMAIL_DOMAIN || '*',
    NEW_USER_KEY: process.env.NEW_USER_KEY || 'NOTFORPRODUCTION',
    MIN_PASSWORD_LENGTH: process.env.MIN_PASSWORD_LENGTH || 8,
    CLIENT_KEY: process.env.CLIENT_KEY || 'NOTFORPRODUCTION',
    VERSION: process.env.npm_package_version || 'UNKNOWN VERSION',
    LOG_LEVEL: process.env.LOG_LEVEL || 'info',
  }
