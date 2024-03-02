/**
 * Error handling middleware to catch and handle specific errors
 * @param {Error} err - Error object
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Next middleware function
 */
 
function errorHandler(err, req, res, next) {
  if (err instanceof TypeError && err.message === "number must be a positive integer") {
    res.status(400).json({ error: "Parameter 'number' must be a positive integer." });
  } else {
    next(err); // Pass the error to the default Express error handler
  }
}

module.exports = errorHandler;
