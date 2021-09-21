const router = require('express').Router();
const {
	addNewCars,
	getAllCars3to5L,
	getWhiteCars,
	getAllHybrids,
} = require('./handlers');

const prefix = process.env.API_PREFIX;

router.post(`${prefix}/add`, addNewCars);
router.get(`${prefix}/3to5`, getAllCars3to5L);
router.get(`${prefix}/whitecars`, getWhiteCars);
router.get(`${prefix}/hybrids`, getAllHybrids);

module.exports = router;
