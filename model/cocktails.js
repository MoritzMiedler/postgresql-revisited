const db = require('../db');

async function getCocktails() {
  const { rows } = await db.query('select cname, preis from cocktail;');

  if (rows.length > 0)
    return {
      code: 200,
      data: rows,
    };
  else
    return {
      code: 404,
      data: `the specified cocktail ${data.cname} was not found in the database`,
    };
}
module.exports = {
  getCocktails,
};
