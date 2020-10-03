const express = require('express');
const path = require('path');

const router = express.Router();

// Static Files
router.use(/file\//, express.static(path.join(__dirname, `/file`)));

// Home and Js files
router.use('/', express.static(path.join('.', '/client')));

// Redirect all other urls to client static files
router.get('*', (req, res) => {
  res.sendfile(path.join('.', '/client/index.html'));
})

router.use((req, res) => res.send('Invalid Endpoint'))


module.export = router
