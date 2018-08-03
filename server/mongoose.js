const mongoose = require('mongoose');
mongoose.connect('mongodb://database:27017/gallery',{ useNewUrlParser: true })
	.then(() => { // if all is ok we will be here
        
    })
    .catch(err => { // we will not be here...
        console.error('App starting error:', err.stack);
        //process.exit(1);
    });

const Schema = mongoose.Schema;

const gameSchema = new Schema({
	name: {type: String},
	description: String,
	videos: [String],
	images: [String],
	cover_image: String,
	review: String,
	company: String,
	issue_date: Date,
	tags: [String]
});

const Game = mongoose.model('Game', gameSchema);

module.exports = Game;