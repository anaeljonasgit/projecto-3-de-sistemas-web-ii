const express = require('express');
const router = express.Router();

const students = require('../controllers/students');
const meets = require('../controllers/meets');

function send(req, res, response) {
    return response.error ? res.status(400).send(response) : res.status(200).send(response);
};

router.get('/', async (req, res) => {
    let response = await meets.getAll();
    send(req, res, response);
});

router.get('/:meet_id', async (req, res) => {
    let response = await meets.get({
        _id: req.params.meet_id
    }); send(req, res, response);
});

router.post('/create', students.middlewares.authenticated, async (req, res) => {
    let response = await meets.create({
        name: req.body.name,
        date: req.body.date,
        topic_id: req.body.topic_id,
        students_ids: req.body.students_ids
    }); send(req, res, response);
});

router.delete('/:meet_id/delete', students.middlewares.authenticated, async (req, res) => {
    let response = await meets.delete({
        _id: req.params.meet_id
    }); send(req, res, response);
});

module.exports = router;