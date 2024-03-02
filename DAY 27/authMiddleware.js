const jwt = require('jsonwebtoken');

function authenticateAndAuthorize(roles) {
  return (req, res, next) => {
    // Checks if the Authorization header is present
    const token = req.headers.authorization;
    if (!token) {
      return res.status(401).json({ error: 'Unauthorized: No token provided' });
    }

    try {
      // Verifing the token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded;

      // Checks if the user has the required role
      if (roles && !roles.includes(decoded.role)) {
        return res.status(403).json({ error: 'Forbidden: Insufficient permissions' });
      }

      next();
    } catch (error) {
      return res.status(401).json({ error: 'Unauthorized: Invalid token' });
    }
  };
}

module.exports = authenticateAndAuthorize;
