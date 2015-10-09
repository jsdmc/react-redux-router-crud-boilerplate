var express = require('express');
var path = require('path');

var app = express();

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

app.post('/api/login', function(req, res) {
    const credentials = req.body;
    if(credentials.userName==='admin@example.com' && credentials.password==='password'){
      res.json({'userName': credentials.userName, 'role': 'ADMIN'});   
    }else{
      res.status('500').send({'message' : 'Invalid user/password'});
    }
});

app.post('/api/logout', function(req, res) {
    res.json({'userName': 'admin', 'role': 'ADMIN'});   
});

app.listen(port, function () {
  console.log('Server running on port ' + port);
});