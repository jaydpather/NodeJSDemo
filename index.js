const express = require('express');
const server = express();

server.get('/', (req, res) => {
	res.send("Hello, world");
});

server.get('/about', (req, res) => {
	res.send("ABOUT US");
});

server.listen(80, () => {
	console.log("Express server is running...");
});