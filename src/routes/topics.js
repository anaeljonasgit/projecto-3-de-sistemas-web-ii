const express = require('express');
const router = express.Router();

const students = require('../controllers/students');
const topics = require('../controllers/topics');

function send(req, res, response) {
    return response.error ? res.status(400).send(response) : res.status(200).send(response);
};

router.get('/', async (req, res) => {
    let response = await topics.getAll();
    send(req, res, response);
});

router.get('/:topic_id', async (req, res) => {
    let response = await topics.get({
        _id: req.params.topic_id
    }); send(req, res, response);
});

router.post('/create', students.middlewares.authenticated, async (req, res) => {
    let response = await topics.create({
        name: req.body.name,
        dificult: req.body.dificult,
        time: req.body.time
    }); send(req, res, response);
});

router.delete('/:topic_id/delete', students.middlewares.authenticated, async (req, res) => {
    let response = await topics.delete({
        _id: req.params.topic_id
    }); send(req, res, response);
});

module.exports = router;