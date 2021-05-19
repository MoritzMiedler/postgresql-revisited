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

  async function getCocktailCheaperThan(price) {
    const { rows } = await db.query('select cname, preis from cocktail where preis <= $1', [price]);
    return {
      data: rows,
      status: 200,
    };
  }

  async function deleteCocktail(name) {
    const { rows } = await db.query('select cname from cocktail where cname = $1', [name]);
    if (rows.length > 0) {
      await db.query('delete from besteht where cid = (select cid from cocktail where cname = $1)', [name]);
      await db.query('delete from bestellt where cid = (select cid from cocktail where cname = $1)', [name]);
      await db.query('delete from cocktail where cname = $1', [name]);
      return {
        data: 'Deleted',
        status: 200,
      };
    }
    console.error(`Cocktail ${name} not found!`);
    return {
      data: `Cocktail ${name} not found!`,
      status: 500,
    };
  }

  async function addCocktail(cname, preis, zubereitung, kid, zgid, sgid) {
    await db.query('insert into cocktail(cname, preis, zubereitung, kid, zgid, sgid) values ($1, $2, $3, $4, $5, $6)', [cname, preis, zubereitung, kid, zgid, sgid]);
  
    const { rows } = await db.query('select * from cocktail');
    return {
      data: `Inserted ${rows.length}`,
      status: 200,
    };
  }
  
  


  module.exports = { getAllCocktails,getCocktailByName,getCocktailCheaperThan,deleteCocktail,addCocktail}