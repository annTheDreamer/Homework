const mongooose = require('mongoose');

const Resident = mongooose.model('resident', {
	name: String,
	hasCar: Boolean,
	isBoomer: Boolean,
});

module.exports = Resident;
