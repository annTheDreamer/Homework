const express = require('express');
const app = express();
const appRoute = require('./routes');

app.use(express.json());
app.use(
	express.urlencoded({
		extended: false,
	})
);
app.use(appRoute);
module.exports = app;
