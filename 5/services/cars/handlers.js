const Car = require('../../core/cars');

const addNewCars = async (req, res, next) => {
	const cars = req.body;
	try {
		await Car.insertMany(cars);
		return res.status(201).json('New cars were added.');
	} catch (error) {
		return res.status(500).json(error);
	}
};

const getAllCars3to5L = async (req, res, next) => {
	try {
		const cars = await Car.find().where('l/100kmh').lte(5).gte(3);
		return res.status(200).json(cars);
	} catch (error) {
		return res.status(500).json(error);
	}
};

const getAllHybrids = async (req, res, next) => {
	try {
		const cars = await Car.find()
			.where({ powerTrain: 'hybrid' })
			.sort({ make: 'asc' })
			.count();
		return res.status(200).json(cars);
	} catch (error) {
		return res.status(500).json(error);
	}
};

const getWhiteCars = async (req, res, next) => {
	try {
		const cars = await Car.find({ color: 'white' })
			.and([{ 'l/100kmh': { $lt: 6 } }])
			.limit(5);
		return res.status(200).json(cars);
	} catch (error) {
		console.log(error);
		return res.status(500).json(error);
	}
};

module.exports = {
	addNewCars,
	getAllHybrids,
	getWhiteCars,
	getAllCars3to5L,
};
