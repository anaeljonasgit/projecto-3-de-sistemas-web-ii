const express = require('express');
const router = express.Router();

const students = require('../controllers/students');

function send(req, res, response) {
    return response.error ? res.status(400).send(response) : res.status(200).send(response);
};

router.get('/', async (req, res) => {
    let response = await students.getAll();
    send(req, res, response);
});

router.get('/:student_id', async (req, res) => {
    let response = await students.get({
        _id: req.params.student_id
    }); send(req, res, response);
});

router.post('/login', async (req, res) => {
    let response = await students.login({
        email: req.body.email,
        password: req.body.password
    }); send(req, res, response);
});

router.post('/create', async (req, res) => {
    let response = await students.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        phone: req.body.phone
    }); send(req, res, response);
});

router.put('/:student_id/update', async (req, res) => {
    let response = await students.update({
        _id: req.params.student_id,
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        phone: req.body.phone
    }); send(req, res, response);
});

router.delete('/:student_id/delete', async (req, res) => {
    let response = await students.delete({
        _id: req.params.student_id
    }); send(req, res, response);
});

module.exports = router;