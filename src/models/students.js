const mongoose = require('mongoose');

const studentSchema = mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	phone: {
		type: Number,
		required: true
	}
});

const Student = mongoose.model('students', studentSchema);

module.exports = Student;