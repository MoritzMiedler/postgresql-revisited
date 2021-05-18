const express = require('express');
// const asyncHandler = require('express-async-handler');

const router = express.Router();

router.get('/cocktails', (req, res) => {
  try {
    res.status(200).json(getFruits(req.query));
  } catch (error) {
    res.status(500).end();
    console.error(error);
  }
});

module.exports = router;
