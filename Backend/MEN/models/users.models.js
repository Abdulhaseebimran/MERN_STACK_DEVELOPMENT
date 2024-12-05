const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    gender: {
        type: String,
        enum: ["Male", "Female"],
    },
    Age: Number,
})

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;