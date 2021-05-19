const db = require('../db');

async function getAllCocktails() {
    const { rows } = await db.query('select cname, preis from cocktail');
    return {
      data: rows,
      status: 200,
    };
  }

  async function getCocktailByName(name) {
    const { rows } = await db.query('select zbez from cocktail join besteht b on cocktail.cid = b.cid join zutat z on b.zid = z.zid where cname = $1', [name]);
    const list = [];
    rows.forEach((el) => list.push(el.zbez));
    return {
      data: list,
      status: 200,
    };
  }


  module.exports = { getAllCocktails,getCocktailByName}