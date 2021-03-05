const { Schema, model } = require('mongoose');

const reviewModel = new Schema({
	title: {
		type: String,
		required: true,
	},
	message: {
		type: String,
		required: true,
	},
	author: {
		type: String,
		required: false,
		default: 'Visitor',
	},
	date: {
		type: Date,
		default: Date.now,
	},
});

module.exports = model('Review', reviewModel);
