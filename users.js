// models/users.js
const mongoose = require('../db');  // Adjust the path if needed
const Schema = mongoose.Schema;

const userDataSchema = new Schema({
    username: String,
    password: String,
    email: String,
    role: String,
    uuid: String,
});

module.exports = mongoose.model('User', userDataSchema);