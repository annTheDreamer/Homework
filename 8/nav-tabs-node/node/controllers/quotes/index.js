const Quote = require('../../models/quotes');

const getAllQuotes = async (req, res, next) => {
	try {
		const quotes = await Quote;
		return res.status(200).json(quotes);
	} catch (error) {
		return res.status(500).json(error);
	}
};

module.exports = {
	getAllQuotes,
};
