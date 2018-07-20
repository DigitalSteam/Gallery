const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/gallery');

var Schema = mongoose.Schema;

var gameSchema = new Schema({
	name: {type: String, unique: true},
	description: String,
	videos: [String],
	images: [String],
	cover_image: String,
	review: String,
	company: String,
	issue_date: Date,
	tags: [String]
});

var Game = mongoose.model('Number', gameSchema);

module.exports = Game;