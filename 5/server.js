require('dotenv').config();
const http = require('http');
const app = require('./app');
const { connectToDatabase } = require('./core/database');

const port = process.env.PORT || 8080;
const server = http.createServer(app);

connectToDatabase()
	.then(() => {
		server.listen(port, () => {
			console.log(`Server running on port ${port}.`);
		});
	})
	.catch((error) => {
		console.log(error);
	});
