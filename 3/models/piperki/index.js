const allPiperki = [
	{
		id: 1,
		color: 'red',
	},
	{
		id: 2,
		color: 'yellow',
	},
	{
		id: 3,
		color: 'green',
	},
];

const getAllPiperki = () => {
	return allPiperki;
};

const getPiperkaById = (id) => {
	return allPiperki.find((piperka) => piperka.id === id);
};

module.exports = {
	getAllPiperki,
	getPiperkaById,
};
