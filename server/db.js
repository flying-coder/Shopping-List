//データベースを使用するためのファイル

const Pool = require("pg").Pool;

const pool = new Pool({
    user: "maya",
    host: "localhost",
    port : 5000,
    database: "shoppinglistdatabase",
    
    //I wrote 2 lines below because I got error of server
    idleTimeoutMillis: 0, 
    connectionTimeoutMillis: 0
})

module.exports = pool;