const router = require('express').Router();
const { getAllQuotes } = require('../controllers/quotes');

const PREFIX = process.env.API_PREFIX;

router.get(`${PREFIX}/posts`, getAllQuotes);

module.exports = router;
