const express = require('express');
const cors = require('cors');

const database = require('./database');
const envs = require('./envs');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => res.redirect('/students'));
app.use('/students', require('./routes/students'));
app.use('/topics', require('./routes/topics'));
app.use('/meets', require('./routes/meets'));

app.listen(envs.server.port, () => {
    console.log({ server: 'Server online!' });
});