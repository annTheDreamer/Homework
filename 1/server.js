const http = require('http');

const path = require('path');
const pathToFile = path.join(__dirname, 'Object.txt');
const pathToFile1 = path.join(__dirname, 'Array.txt');
const myFiles = require('./files');
const myObjects = require('./objects');

myFiles.writeToFile(pathToFile, JSON.stringify(myObjects.myFavoriteBook));
myFiles.writeToFile(pathToFile1, myObjects.rainbowColors);
myFiles.readFromFile(pathToFile).then(() => {
	console.log('File read.');
});
myFiles.readFromFile(pathToFile1).then(() => {
	console.log('File read.');
});

const server = http.createServer();

server.listen(8080, () => {
	console.log('First homework');
});
