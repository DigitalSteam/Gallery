const mongoose = require('mongoose');
const Game = require('mongoose.js');

const addGame = (gameJSON, callback) => {
	const game = new Game( gameJSON );
	game.save( (err, game) => {
		if(err) throw err;
		else console.log('game added');
	});
}

const fetchGameById = (id, callback) => {
	Game.findById(id, (err, game) => {
		if(err) throw err;
		callback(game);
	});
}

const searchGameByParams = (params, callback) => {
	// A sample params can be { 'name': 'Dota' }
	Game.findOne(params, (err, game) => {
		if(err) throw err;
		callback(game);
	});
}

const searchGamesByParams = (params, callback) => {
	Game.find(params, (err, game) => {
		if(err) throw err;
		callback(game);
	});
}

module.exports = {
	addGame,
	fetchGameById,
	searchGameByParams,
	searchGamesByParams
}