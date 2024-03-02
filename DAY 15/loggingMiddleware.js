/**
 * Logging middleware for Express
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next function
 */
function loggingMiddleware(req, res, next) {
  const timestamp = new Date().toLocaleString();

  console.log(`Request received at : [${timestamp}]`);
  console.log(`Request ip : ${req.ip}`);
  console.log(`Method Used: ${req.method}`);
  console.log(`URL: ${req.url}`);
  console.log(`Headers:`);
  console.log(req.headers);
  console.log(`Body:`);
  console.log(req.body);
  console.log('\n');
  // Calling the next middleware
  next();
}

module.exports = loggingMiddleware;
