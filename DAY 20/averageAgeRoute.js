const express = require('express');
const User = require('./userModel');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const result = await User.aggregate([
      {
        $group: {
          _id: null,
          averageAge: { $avg: "$age" }
        }
      }
    ]);
    
    const averageAge = result[0].averageAge;
    
    res.json({ averageAge });
  } catch (error) {
    console.error('Error calculating average age:', error.message);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
