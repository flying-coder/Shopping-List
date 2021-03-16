//データベースを使用するためのファイルです

const Pool = require("pg").Pool;

const pool = new Pool({
    user: "maya",
    host: "localhost",
    port : 5000,
    database: "shoppinglistdatabase",
    idleTimeoutMillis: 0,
    connectionTimeoutMillis: 0
})

module.exports = pool;