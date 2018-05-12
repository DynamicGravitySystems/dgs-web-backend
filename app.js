const debug = require('debug')('dgsapi:app');
const express = require('express');
const env = require('./env');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/', require('./controllers'));

app.listen(env.NODE_PORT, () => {
    debug("Listening on port: " + env.NODE_PORT);
});
