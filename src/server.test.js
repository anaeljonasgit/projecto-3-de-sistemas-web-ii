const request = require('supertest');
const app = require('./server');

const database = require('./database');

function getObjectKeys(mock_object, real_object) {
    return [Object.keys(real_object), Object.keys(mock_object)];
};

describe('Test server app routes', () => {
    test('Students routes', async () => {
        const res = await request(app).get('/students');

        const [expected_object, mocked_object] = getObjectKeys({      
            _id: '62607caaca9ad7b9e00027bb',
            name: 'Anael Jonas',
            email: 'anaeljonas@email.com',
            password: 'qwe123qwe',
            phone: 12345678910,
            __v: 0
        }, res.body[0]);

        expect(expected_object).toStrictEqual(mocked_object);
    });

    test('Topics routes', async () => {
        const res = await request(app).get('/topics');

        const [expected_object, mocked_object] = getObjectKeys({
            _id: '6260979744ef19a60e03eac7',
            name: 'Sala de estudos',
            dificult: 10,
            time: 30,
            __v: 0
        }, res.body[0]);

        expect(expected_object).toStrictEqual(mocked_object);
    });

    test('Meets routes', async () => {
        const res = await request(app).get('/meets');

        const [expected_object, mocked_object] = getObjectKeys({
            _id: '626099ae9f6e981117c9010f',
            name: 'Meet para estudar',
            date: '20/04/2022',
            topic_id: "6260979744ef19a60e03eac7",
            students_ids: [
                '6260970f44ef19a60e03eabb',
                '6260972344ef19a60e03eabf'
            ],
            __v: 0
        }, res.body[0]);

        expect(expected_object).toStrictEqual(mocked_object);
    });
});