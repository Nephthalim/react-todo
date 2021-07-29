const express = require('express');
const app = express();
const path = require("path");
const cors = require("cors");
var createError = require('http-errors');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

app.use(express.json());
app.use(cors());

const server_port = process.env.PORT || 5000;

app.use('/auth', require('./routes/jwtAuth'));
app.use('/', require('./routes/dashboard'));

// view engine setup



app.use(logger('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());




module.exports = app;