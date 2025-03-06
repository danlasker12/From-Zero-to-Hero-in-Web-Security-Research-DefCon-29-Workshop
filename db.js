// db.js
const mongoose = require('mongoose');

const mongoUrl = process.env.MONGO_URL || 'mongodb://mongo:27017/challenge';

mongoose.connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

module.exports = mongoose;