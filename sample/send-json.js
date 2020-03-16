const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  res.json({message: 'Hello, this is JSON!'});
});

module.exports = router;
