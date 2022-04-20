const mongoose = require('mongoose');

const TopicModel = require('../models/topics');

const topic = {
	async getAll() {
		let error = { error: 'Tópicos não encontrados.' };
		return await TopicModel.find() || error;
	},

	async get({ _id }) {
		let error = { error: 'Tópico não encontrado.' };
		if (!_id) return error;
		try { return await TopicModel.findOne({ _id }); } catch { return error; };
	},

	async create({ name, dificult, time }) {
		let error = { error: 'Dados inválidos para criar novo tópico.' };
		if (!name || !dificult || !time) return error;
		if (dificult > 10) dificult = 10;
		if (dificult < 0) dificult = 0;
		try { return await TopicModel.create({ name, dificult, time }); } catch { return error; };
	},

	async delete({ _id }) {
		let error = { error: 'Dados inválidos para deletar esse tópico.' };
		if (!_id) return error;
		try {
			let deleted_topic = await TopicModel.deleteOne({ _id });
			return deleted_topic.deletedCount ? 'Tópico deletado com sucesso!' : error;
		} catch { return error; };
	}
};

module.exports = topic;