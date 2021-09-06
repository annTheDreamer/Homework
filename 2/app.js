const express = require('express');
const app = express();
const appRoute = require('./routes');

app.use(express.json());
app.use(appRoute);
module.exports = app;
