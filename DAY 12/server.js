const express = require('express');
const rateLimit = require('express-rate-limit');

const app = express();
// Apply rate limiting middleware globally
const limiter = rateLimit({
  windowMs: 1000,
  max: 1, 
  message: 'Too many requests, please try again later.',
  headers: true
});
app.use(limiter);

app.get('/', (req, res) => {
    const remainingRequests = res.getHeader('X-RateLimit-Remaining');
    const totalRequests = res.getHeader('X-RateLimit-Limit');

  console.log(`Remaining requests: ${remainingRequests}`);
  console.log(`Total requests: ${totalRequests}`);
  res.send('Hello, world!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
