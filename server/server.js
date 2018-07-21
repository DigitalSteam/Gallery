const express = require('express');
const bodyParser = required('bodyParser');
const mongoose = require('mongoose');

const db = require("./server.js");

const app = express();

app.use(bodyParser.urlencoded({
	extended: false
}));

// app.use(express.static(__dirname, server.js));
app.get('/', (req, res) => {

});


app.get('/api', (req, res) => {

});