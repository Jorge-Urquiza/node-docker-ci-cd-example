const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));
app.use(require('./routes/index.js'));

module.exports = app;