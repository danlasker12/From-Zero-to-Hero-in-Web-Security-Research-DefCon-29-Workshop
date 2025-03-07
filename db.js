const mongoose = require('mongoose');
const { MongoClient } = require('mongodb');

const mongoUrl = process.env.MONGO_URL || 'mongodb://mongo:27017/challenge';
const options = { useUnifiedTopology: true };

// Update to use useUnifiedTopology
mongoose.connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

MongoClient.connect(mongoUrl, options, (err, client) => {
  if (err) {
    console.error('Failed to connect to the database. Error:', err);
    return;
  }
  console.log('Connected successfully to the database');
  const db = client.db('challenge');
  // ... rest of your code
});

module.exports = mongoose;