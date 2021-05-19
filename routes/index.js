const express = require('express');
const asyncHandler = require('express-async-handler');

const router = express.Router();

const { getAllCocktails,} = require('../model/functions.js');
// const asyncHandler = require('express-async-handler');



router.get(
  '/allCocktails',
  asyncHandler(async (req, res) => {
    const result = await getAllCocktails();
    res.status(result.code).json(result);
  }),
);

module.exports = router;
