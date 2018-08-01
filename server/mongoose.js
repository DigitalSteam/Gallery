const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/gallery',{ useNewUrlParser: true });

const Schema = mongoose.Schema;

const gameSchema = new Schema({
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

const Game = mongoose.model('Number', gameSchema);

module.exports = Game;