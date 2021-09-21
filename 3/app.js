const express = require('express');
const appRoutes = require('./routes');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(appRoutes);

module.exports = app;
