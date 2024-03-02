/**
 * Express route to handle requests with a positive integer parameter
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */

function positiveIntegerHandler(req, res) {
  const number = parseInt(req.query.number); 

  if (Number.isNaN(number) || number <= 0 || !Number.isInteger(number)) {
    throw new TypeError("number must be a positive integer");
  }

  res.status(200).json({ message: "Success" });
}

module.exports = positiveIntegerHandler;
