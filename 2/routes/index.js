const router = require('express').Router();
const path = require('path');
const myFileSystem = require('../fs');
const pathToFile = path.join(__dirname, 'requestBody.txt');

router.get('/songs', (req, res, next) => {
	const params = req.query;
	console.log(params);
	if (Object.keys(params).length > 0) res.status(200).json(params);
	else res.status(400).json('Missing query parameters!');
});

router.post('/detectives', (req, res, next) => {
	const body = JSON.stringify(req.body);
	myFileSystem
		.writeToFile(pathToFile, body)
		.then(() => {
			res.status(201).json('File written.');
		})
		.catch((err) => {
			res.status(500).json(err);
		});
	// const writtenFile = myFileSystem.writeToFile(pathToFile, body);
	// if (writtenFile) res.status(201).json(body);
	// else res.status(500).json("No idea what I'm doing");
});

module.exports = router;
