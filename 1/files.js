const fs = require('fs/promises');

const writeToFile = (pathToFile, content) => {
	fs.writeFile(pathToFile, content)
		.then(() => {
			console.log('File written.');
		})
		.catch((err) => {
			console.log(err);
		});
};

const readFromFile = async (pathToFile) => {
	const resultFromFileRead = await fs.readFile(pathToFile);
	return resultFromFileRead.toString();
};

module.exports = {
	writeToFile,
	readFromFile,
};
