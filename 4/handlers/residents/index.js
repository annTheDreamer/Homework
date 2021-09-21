const Resident = require('../../core/residents');

const getAllResidents = async (req, res, next) => {
	try {
		const allResidents = await Resident.find();
		return res.status(200).json(allResidents);
	} catch (error) {
		return res.status(500).json('Internal server error.');
	}
};

const addNewResident = async (req, res, next) => {
	const { name, hasCar, isBoomer } = req.body;
	if (!name || !hasCar || !isBoomer) {
		return res.status(400).json('Invalid input, object invalid.');
	}
	try {
		// Check whether an existing resident already exists? Code 409.
		const foundResident = await Resident.find({ name });
		if (foundResident.length > 0)
			return res.status(409).json('Resident already exists');
	} catch (error) {
		return res.status(500).json(error);
	}
	try {
		const newResident = await Resident.create({ name, hasCar, isBoomer });
		return res.status(201).json(newResident._id);
	} catch (error) {
		return res.status(500).json(error);
	}
};

const editResident = async (req, res, next) => {
	const residentId = req.params.id;
	const { name, hasCar, isBoomer } = req.body;
	if (!residentId || !name || !hasCar || !isBoomer) {
		return res.status(400).json('Bad request, missing info.');
	}
	try {
		await Resident.findByIdAndUpdate(residentId, { name, hasCar, isBoomer });
		return res.status(200).json("Resident's info edited.");
	} catch (error) {
		return res.status(500).json('Internal server error.');
	}
};

const deleteResident = async (req, res, next) => {
	const residentId = req.params.id;
	if (!residentId) {
		return res.status(400).json('Missing ID!');
	}
	try {
		await Resident.deleteOne({ _id: residentId });
		return res.status(200).json(`Resident with ID ${residentId} was deleted.`);
	} catch (error) {
		return res
			.status(500)
			.json('Internal server error - resident cannot be deleted.');
	}
};

module.exports = {
	getAllResidents,
	addNewResident,
	editResident,
	deleteResident,
};
