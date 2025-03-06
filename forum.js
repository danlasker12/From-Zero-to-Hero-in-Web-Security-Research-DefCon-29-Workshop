// models/forum.js
const mongoose = require('../db');  // Adjust the path if your structure is different
const Schema = mongoose.Schema;

const forumDataSchema = new Schema({
    username: String,
    msg: String,
});

module.exports = mongoose.model('Forum', forumDataSchema);