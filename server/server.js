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
app.get('/', (req, res) => {

});


app.get('/api', (req, res) => {

});

app.listen(port, () => {
  console.log('Listening on port ' + port);
});