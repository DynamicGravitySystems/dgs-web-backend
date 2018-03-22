const express = require('express');
const env = require('./env');

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/sendmail', express.static(__dirname + '/public'));

app.use('/sendmail', require('./sendmail'));

app.listen(env.NODE_PORT, () => {
    console.log("Listening on port: " + env.NODE_PORT);
});
