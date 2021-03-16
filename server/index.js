//POST PATCH DELETEを行うファイルです

const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json());

//
//ROUTE
//

//create shopping list
app.post("/shoppinglist", async (req, res) => {
    console.log(req.body)
        const { item } = req.body;
        const newSL = await pool.query(
            "INSERT INTO shoppinglist(item)",
            [item]
        ); 
        res.json(newSL);
        

    // try {
        // const { item } = req.body;
        // const newSL = await pool.query(
        //     "INSERT INTO shoppinglist(item)",
        //     [item]
        // );
        // res.json(newSL)    
    // } catch (err) {
    //     console.error(err.message);
    // }
});



//call server
app.listen(5000, () => {
    console.log("server has started on port 5000");
});
