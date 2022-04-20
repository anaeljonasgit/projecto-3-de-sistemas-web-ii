const mongoose = require('mongoose');

const StudentModel = require('../models/students');

const student = {
	async getAll() {
		let error = { error: 'Usuários não encontrados.' };
		return await StudentModel.find() || error;
	},

	async get({ _id }) {
		let error = { error: 'Usuário não encontrado.' };
		if (!_id) return error;
		try { return await StudentModel.findOne({ _id }); } catch { return error; };
	},

	async create({ name, email, password, phone }) {
		let error = { error: 'Dados inválidos para criar novo usuário.' };
		if (!name || !email || !password || !phone) return error;
		try { return await StudentModel.create({ name, email, password, phone }); } catch { return error; };
	},

	async update({ _id, name, email, password, phone }) {
		let error = { error: 'Dados inválidos para atualizar esse usuário.' };
		if (!_id || !name || !email || !password || phone) return error;
		try {
			let updated_student = await StudentModel.updateOne({ _id }, { $set: { name, email, password, phone } });
			return updated_student.matchedCount ? student.get({ _id }) : error;
		} catch { return error; };
	},

	async delete({ _id }) {
		let error = { error: 'Dados inválidos para deletar esse usuário.' };
		if (!_id) return error;
		try {
			let deleted_student = await StudentModel.deleteOne({ _id });
			return deleted_student.deletedCount ? 'Usuário deletado com sucesso!' : error;
		} catch { return error; };
	},

	async login({ email, password }) {
		let error = { error: 'E-mail ou senha inválidos.' };
		if (!email || !password) return error;
		let student = await StudentModel.findOne({ email, password }) || error;
		if (student.error) return error;
		return { authorization: student._id };
	},

	middlewares: {
    	authenticated(req, res, next) {
			let error = { error: 'Não autorizado. Utilize authorization: helloworld nos headers da requisição para poder ter acesso.' };
			if (req.headers.authorization == 'helloworld') {
				return next();
			} else {
				return res.status(401).send(error);
			};
	    }
    }
};

module.exports = student;