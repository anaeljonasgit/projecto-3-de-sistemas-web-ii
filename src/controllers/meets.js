const mongoose = require('mongoose');

const MeetModel = require('../models/meets');

const student = require('./students');
const topic = require('./topics');

const meet = {
	async getAll() {
		let error = { error: 'Meets não encontrados.' };
		return await MeetModel.find() || error;
	},

	async get({ _id }) {
		let error = { error: 'Meet não encontrado.' };
		if (!_id) return error;
		try { return await MeetModel.findOne({ _id }); } catch { return error; };
	},

	async create({ name, date, topic_id, students_ids }) {
		let error = { error: 'Dados inválidos para criar novo meet.' };
		if (!name || !date || !topic_id || !students_ids) return error;

		if (date.length != '20/04/2022'.length) return error;

		topic_id = await topic.get({ _id: topic_id });
		students_all = await student.getAll();

		try {
			if (topic_id.error) return error;
			if (students_all.error) return error;
		} catch {};

		let total_students = [];
		for (i in students_all) {
			let student_id = students_all[i]._id.toString();

			if (students_ids.includes(student_id)) {
				total_students.push(student_id);
			};
		};

		if (students_ids.length != total_students.length) return error;

		try { return await MeetModel.create({ name, date, topic_id, students_ids }); } catch { return error; };
	},

	async delete({ _id }) {
		let error = { error: 'Dados inválidos para deletar esse meet.' };
		if (!_id) return error;
		try {
			let deleted_meet = await MeetModel.deleteOne({ _id });
			return deleted_meet.deletedCount ? 'Meet deletado com sucesso!' : error;
		} catch { return error; };
	}
};

module.exports = meet;