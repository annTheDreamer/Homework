require('dotenv').config();
const http = require('http');
const app = require('./app');

const port = process.env.PORT || 8080;

const server = http.createServer(app);

server.listen(port, () => {
	console.log('Server started!');
	console.log(`${process.env.APP_NAME} started on port ${port}`);
	// console.log(process.env);
});
