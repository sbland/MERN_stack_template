require('dotenv').config();

const express = require('express');

// Middleware
const helmet = require('helmet'); // security middleware
const bodyParser = require('body-parser');  // parse POST body
const cookieParser = require('cookie-parser'); // Parse cookies from request
const pino = require('pino'); // Logging
const expressPino = require('express-pino-logger');

// Other
const config = require('./config');

// Routes
const router = require('./router');
const authRouter = require('./authenticationRoutes');

const server = express();
const logger = pino({ level: config.LOG_LEVEL || 'info' });
const expressLogger = expressPino({ logger });

/* ====== Middleware ====== */
server.use(helmet());
server.use(cookieParser());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));
server.use(expressLogger);


// Log all connections
// server.use((req,res,next) => { logger(`${req.method} - New Request to ${req.url}`); next(); });

/* ====== DEV & DEMO ONLY ======= */
// TODO: Implement this
// server.get('/resetdata', (req, res) => {
//   logger('Resetting data');
//   resetData(config.DEMO_DATA_FILE, false, false)
//   .then(() => res.send('SUCCESS'))
//   .catch((e) => {
//     logger('Failed to reset data', 'ERROR');
//     res.send('FAILED');
//   });
// });

// Included this to allow front end to check server is running
server.get('/test', ((req, res) => {
    logger.debug(`${req.originalUrl} checked in`);
    res.json({ ok: true, version: config.VERSION });
  }));

server.use(/auth\//, authRouter); // pass any auth requests to the auth router

const authRequest = (req, res, next) => next();
// TODO: Implement session manager
// const { authRequest } = sessionManager;

server.use('*', authRequest, router);
