const express = require('express');
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

const server_port = process.env.YOUR_PORT || process.env.PORT || 5000;
const server_host = process.env.YOUR_HOST || '127.0.0.1';

app.use('/auth', require('./routes/jwtAuth'));
app.use('/', require('./routes/dashboard'));

app.listen(server_port, server_host, () => {
    console.log(`Listening on port ${server_port}`)
})