require('babel/register')();

import express from 'express';
import session from 'express-session';
import bodyParser from 'body-parser';
import path from 'path';

import { login, logout } from './actions/auth';
import * as moviesController from './actions/movies';

var app = express(),
    router = express.Router();  

var isProduction = process.env.NODE_ENV === 'production';
var port = isProduction ? process.env.PORT : 3001;

app.use(session({
  secret: 'react and redux rule!!!!',
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 60000 }
}));

app.use(bodyParser.json({ type: 'application/json' }))

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
});

router.post('/login', login);
router.post('/logout', logout);

// actions added for movies
router.route('/movies')
  .get( (req, res) => {
    moviesController.getAll(req, res)
    .then((result) => {
      res.json(result);
    })
    .catch((reason) => {
      if (reason && reason.redirect) {
        res.redirect(reason.redirect);
      } else {
        console.error('API ERROR: ', reason);
        res.status(reason.status || 500).json(reason);
      }
    });
});

app.use('/api', router);

app.listen(port, function () {
  console.log('Server running on port ' + port);
});