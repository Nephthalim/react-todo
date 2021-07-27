const express = require('express');
const app = express();
const path = require("path");
const cors = require("cors");

app.use(express.json());
app.use(cors());

const server_port = process.env.PORT || 5000;

app.use('/auth', require('./routes/jwtAuth'));
app.use('/', require('./routes/dashboard'));

app.use(express.static(path.join(__dirname, "client/build")))

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/public/index.html'))
})

app.listen(server_port, () => {
    console.log(`Listening on port ${server_port}`)
})