const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const http = require('http');

const app = express();
//log requests to the console
app.use(logger('dev'));
//parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//set up catch-all route that send back a welcome message in JSON format
require('./routes')(app);
app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome'
}))

const port = parseInt(process.env.port, 10) || 3000;
app.set('port', port);
const server = http.createServer(app);
server.listen(port);
module.exports = app;


