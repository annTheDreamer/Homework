const mongoose = require('mongoose');

const Car = mongoose.model('cars', {
	make: String,
	series: String,
	powerTrain: String,
	'l/100kmh': Number,
	color: String,
});

module.exports = Car;
