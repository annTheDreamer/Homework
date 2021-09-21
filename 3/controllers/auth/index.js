const { createToken } = require('../../middleware/jwt');

const logIn = (req, res, next) => {
	const { username, password } = req.body;
	if (
		(!username || username !== 'korisnik') &&
		(!password || password !== 'lozinka')
	) {
		return res.status(400).json('Invalid username or password!');
	}
	const token = createToken(username);
	return res.status(200).json(token);
};

const logOut = (req, res, next) => {
	res.status(200).json('Logged out!');
};

module.exports = {
	logIn,
	logOut,
};
