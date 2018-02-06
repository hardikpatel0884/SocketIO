/**
 * server.server.js
 * basic server operation's
 * */

const {config} = require('./../config/config'),
    app = require('express')();


app.listen(config.port, () => {
    console.log(`server start on port ${config.port}`);
});