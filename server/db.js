//データベースを使用するためのファイルです

const Pool = require("pg").Pool;

const pool = new Pool({
    user: "maya",
    database: "shoppinglist"
})




module.exports = pool;