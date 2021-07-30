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

app.use(express.static(path.join(__dirname, 'public')));

// view engine setup

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
app.use('/auth', require('./routes/jwtAuth'));
app.use('/', require('./routes/dashboard'));

app.listen(server_port, () => {
    console.log(`Listening on port:${server_port}`);
});