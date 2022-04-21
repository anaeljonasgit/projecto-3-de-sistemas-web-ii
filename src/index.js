const app = require('./server');
const envs = require('./envs');

const database = require('./database');

app.listen(envs.server.port, () => {
    console.log({ server: 'Server online!' });
});