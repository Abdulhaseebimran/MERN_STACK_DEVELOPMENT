const mongoose = require('mongoose');

const connectToDB = mongoose.connect('mongodb://0.0.0.0/men', {
    useNewUrlParser: true,
})
    .then(() => console.log('Database connection successful'))
    .catch(err => console.error('Database connection error: ', err));

module.exports = connectToDB;