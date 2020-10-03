
require('dotenv').config();

const express = require('express');

// Middleware
const helmet = require('helmet');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

// Other
const logger = require('./src/logger');
const config = require('./src/config');

// Routes
const router = require('./router');
const authRouter = require('./authenticationRoutes');

const server = express();


/* ====== Middleware ====== */
server.use(helmet());
server.use(cookieParser());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));


// Log all connections
server.use((req,res,next) => { logger(`${req.method} - New Request to ${req.url}`); next(); });


// Included this to allow front end to check server is running
server.get('/test', ((req, res) => {
    logger('Test');
    // logger(`${req.originalUrl} checked in`, 'TEST');
    res.json({ ok: true, version: config.VERSION });
  }));

server.use(/auth\//, authRouter);

const authRequest = (req, res, next) => next();
server.use('*', authRequest, router);
