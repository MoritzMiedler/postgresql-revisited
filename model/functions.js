const db = require('../db');

async function getAllCocktails() {
    const { rows } = await db.query('select cname, preis from cocktail');
    return {
      data: rows,
      status: 200,
    };
  }


  module.exports = { getAllCocktails,}