const generateData = require('./generateData');

const cache = {};
const cacheExpirationTime = 60 * 1000; // 1 minute in milliseconds

/**
 * Caching middleware for Express
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next function
 */
function cacheMiddleware(req, res, next) {
  if (req.method !== 'GET') {
    // If it's not a GET request, pass it to the next middleware
    next();
    return;
  }

  const cacheKey = req.url;

  if (cache[cacheKey] && cache[cacheKey].timestamp > Date.now() - cacheExpirationTime) {
    // If the cache is initialized and the cached response exists and is not expired, return it
    console.log(`Serving from cache for ${req.url}`);
    const start = Date.now(); 
    res.send(cache[cacheKey].response);
    const end = Date.now();
    console.log(`Time taken to serve from cache: ${end - start} ms`);
  } else {
    // Call the next middleware to handle the request and cache the response
    generateData() // Fetch data using the generateData module
      .then(fakeData => {
        const originalSend = res.send;
        res.send = function (body) {
          cache[cacheKey] = {
            response: fakeData,
            timestamp: Date.now()
          };
          originalSend.call(this, body);
        };
        next();
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        next(error); // Pass the error to the error handling middleware
      });
  }
}

module.exports = cacheMiddleware;
