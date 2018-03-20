const express = require('express');
const cors = require('cors');

const env = require('./env');

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(__dirname + '/public'));

app.options('/sendmail', cors());
app.use('/sendmail', require('./sendmail'));

app.listen(env.NODE_PORT, () => {
    console.log("Listening on port: " + env.NODE_PORT);
});