const mongoose = require('mongoose');

const connectToMongoDB = async () => {
  const conn = await mongoose.connect(process.env.CONNECTION_STRING)
//   , { useNewUrlParser: true, useUnifiedTopology: true });

  const db = mongoose.connection;

  db.on('error', (error) => {
    console.error('MongoDB connection error:', error);
  });

  db.once('open', () => {
    console.log('Connected to MongoDB');
  });

  console.log(`MongoDB connected: ${conn.connection.host} , ${conn.connection.name}`);
}

module.exports = connectToMongoDB;
