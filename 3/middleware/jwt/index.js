const jwt = require('jsonwebtoken');

/**
 * JWT decoder function. Accepts a JWT and returns the decoded value.
 * @param {String} jwToken
 * @returns
 */
const jwtDecoder = (jwToken) => {
	return jwt.decode(jwToken);
};

/**
 * Create a JWT using the username as payload.
 * @param {String} payload
 * @returns
 */
const createToken = (payload) => {
	const newToken = jwt.sign({ payload }, process.env.JWT_SECRET, {
		expiresIn: '1h',
	});
	return newToken;
};

const tokenVerifier = (token) => {
	return jwt.verify(token, process.env.JWT_SECRET);
};

/**
 * Middleware function that validates the JWT.
 * @param {*} req
 * @param {*} res
 * @param {*} next
 * @returns
 */
const validateJWTHandler = (req, res, next) => {
	const authorization = req.headers.authorization;
	if (!authorization) return res.status(403).json('Missing JSON Web Token!');
	const [bearer, requestJWT] = authorization.split(' ');
	try {
		tokenVerifier(requestJWT);
	} catch (error) {
		return res.status(401).json('Expired or invalid token!');
	}
	return next();
};

module.exports = {
	tokenVerifier,
	createToken,
	jwtDecoder,
	validateJWTHandler,
};
