const express = require('express');
const asyncHandler = require('express-async-handler');

const router = express.Router();

const { getAllCocktails,getCocktailByName,getCocktailCheaperThan,} = require('../model/functions.js');
// const asyncHandler = require('express-async-handler');



router.get(
  '/cocktails',
  asyncHandler(async (req, res) => {
    const result = await getAllCocktails();
    res.status(result.status).send(result.data);
  }),
);

router.get(
  '/cocktails/:name/zutaten',
  asyncHandler(async (req, res) => {
    const result = await getCocktailByName(req.params.name);
    res.status(result.status).send(result.data);
  }),
);
module.exports = router;
