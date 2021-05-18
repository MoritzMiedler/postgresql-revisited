const express = require('express');
// const asyncHandler = require('express-async-handler');

const router = express.Router();

router.get(
  '/cocktails/:id',
  asyncHandler(async (req, res) => {
    const result = await getCocktails(req.params.id);
    res.status(result.code).json(result);
  }),
);

module.exports = router;
