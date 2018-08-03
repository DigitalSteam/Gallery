const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const db = require("./db.js");

const app = express();
const port = 3003;

app.use(express.static(path.join(__dirname, '../client/dist/')));

app.use(bodyParser.urlencoded({
	extended: false
}));

// app.use(express.static(__dirname, server.js));
app.post('/', (req, res) => {
	console.log('POST ' + req.url );
	const gameJson = {
		'name': "docker",
		'description': "Docker is killing me",
		'videos': ['video1', 'video2'],
		'images': ['image1', 'image2'],
		'cover_image': 'head_image',
		'review': "positive",
		'company': "Dota Inc",
		'issue_date': "1995-12-01",
		'tags': ["shoot", "npc"]
	};
	const callback = (obj) => {
		res.send("success");
	}
	db.addGame(gameJson,callback);
});


app.get('/api', (req, res) => {

});

app.listen(port, () => {
  console.log('Listening on port ' + port);
});