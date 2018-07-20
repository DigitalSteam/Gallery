
var path = require('path');

var DIST_DIR = path.join(__dirname, 'client/dist');
var SRC_DIR = path.join(__dirname, 'client/src');

var config = {
	entry: `${SRC_DIR}/index.jsx`,
	output: {
		path: DIST_DIR,
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.jsx?/,
				include: SRC_DIR,
				loader: 'babel-loader',
				query: {
					presets: ['react', 'env', 'stage-2']
				}
			}
		]
	}

};

module.exports = config;