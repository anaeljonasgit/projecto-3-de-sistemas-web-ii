const mongoose = require('mongoose');

const meetSchema = mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	date: {
		type: String,
		required: true
	},
	topic_id: {
		type: String,
		required: true
	},
	students_ids: {
		type: Array,
		required: true
	}
});

const Meet = mongoose.model('meets', meetSchema);

module.exports = Meet;