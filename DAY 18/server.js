const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
// const { dot } = require('node:test/reporters');

const app = express();

// Connecting to MongoDB
mongoose.connect(process.env.CONNECTION_STRING)
// , {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
.then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('MongoDB connection error:', error);
});

app.use('/users', userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
