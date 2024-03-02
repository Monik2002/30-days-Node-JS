const express = require('express');
const router = express.Router();
const authenticateAndAuthorize = require('./authMiddleware');

router.get('/admin', authenticateAndAuthorize(['admin']), (req, res) => {
  // Only users with the 'admin' role can access this route
  res.json({ message: 'Admin route accessed successfully' });
});

router.get('/user', authenticateAndAuthorize(['user']), (req, res) => {
  // Only users with the 'user' role can access this route
  res.json({ message: 'User route accessed successfully' });
});

module.exports = router;
