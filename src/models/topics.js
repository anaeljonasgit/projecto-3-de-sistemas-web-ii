const mongoose = require('mongoose');

const topicSchema = mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	dificult: {
		type: Number,
		required: true
	},
	time: {
		type: Number,
		required: true
	}
});

const Topic = mongoose.model('topics', topicSchema);

module.exports = Topic;