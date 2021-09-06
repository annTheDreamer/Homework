const router = require('express').Router();
const path = require('path');
const myFileSystem = require('../fs');
const pathToFile = path.join(__dirname, 'sample.txt');

router.get('/songs', (req, res, next) => {
	const params = req.query.params;
	console.log(params);
	if (!params) res.status(404).json(params);
	else res.status(200).json(params);
});

router.post('/detectives', (req, res, next) => {
	const body = req.body;
	const writtenFile = myFileSystem.writeToFile(pathToFile, body);
	if (writtenFile) res.status(201).json(body);
	else res.status(500).json("No idea what I'm doing");
});

module.exports = router;
