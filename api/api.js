require('babel/register')();

import express from 'express';
import path from 'path';

import { login, logout } from './actions/auth' 

var app = express(),
    router = express.Router();  

var isProduction = process.env.NODE_ENV === 'production';
var port = isProduction ? process.env.PORT : 3001;

var bodyParser = require('body-parser');
app.use(bodyParser.json({ type: 'application/json' }))

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
});

router.post('/api/login', login);
router.post('/api/logout', logout);

app.use('/', router);

app.listen(port, function () {
  console.log('Server running on port ' + port);
});