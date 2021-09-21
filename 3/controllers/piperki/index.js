const Piperka = require('../../models/piperki');

const getAllPiperki = (req, res, next) => {
	const allPiperki = Piperka.getAllPiperki();
	res.status(200).json(allPiperki);
};

const getPiperkaById = (req, res, next) => {
	const id = +req.params.id;
	const myPiperka = Piperka.getPiperkaById(id);

	if (!myPiperka) {
		res.status(400).json('Nema takva piperka');
	} else {
		res.status(200).json(myPiperka);
	}
};

module.exports = {
	getAllPiperki,
	getPiperkaById,
};
