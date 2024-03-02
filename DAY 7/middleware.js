/**
 * Express middleware to log incoming requests
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next function
 */

function requestLoggerMiddleware(req, res, next) {
  const timestamp = new Date().toLocaleDateString();
  const method = req.method;
  console.log(`${timestamp} - ${method} request received`);
  next();  //Its purpose is to pass control to the next middleware function or route handler in the chain.
} 

module.exports = requestLoggerMiddleware;
