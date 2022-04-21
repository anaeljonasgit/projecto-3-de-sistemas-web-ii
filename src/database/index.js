const mongoose = require('mongoose');

const envs = require('../envs');

mongoose.connect(envs.database.url)
    .then(() => {
        return { success: 'MongoDB online.' };
    })
    .catch(error => {
        console.log({
            error: {
                mongodb: error
            }
        });
        return { error };
    });

module.exports = mongoose.connection;