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

module.exports = {
	writeToFile,
};
