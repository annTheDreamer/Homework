const express = require('express');
const cors = require('cors');
const carRouter = require('./services/cars/routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(carRouter);

module.exports = app;
