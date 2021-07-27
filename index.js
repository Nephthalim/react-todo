const express = require('express');
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

const server_port = process.env.PORT || 5000;

app.use('/auth', require('./routes/jwtAuth'));
app.use('/', require('./routes/dashboard'));

app.listen(server_port, () => {
    console.log(`Listening on port ${server_port}`)
})