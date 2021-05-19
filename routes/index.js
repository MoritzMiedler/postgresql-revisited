const express = require('express');
const 
// const asyncHandler = require('express-async-handler');

const router = express.Router();

router.get(
  '/cocktails',
  asyncHandler(async (req, res) => {
    const result = await getCocktails();
    res.status(result.code).json(result);
  }),
);

module.exports = router;
