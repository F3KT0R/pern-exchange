const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json()); //req.body

//ROUTES//

//create an exchange

app.post("/exchanges", async (req, res) => {
  try {
    const { valute_from, valute_to, exchange_rate } = req.body;
    const newExchange = await pool.query(
      "INSERT INTO exchange (valute_from, valute_to, exchange_rate) VALUES($1, $2, $3) RETURNING *",
      [valute_from, valute_to, exchange_rate]
    );

    res.json(newExchange.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//get all exchanges

app.get("/exchanges", async (req, res) => {
  try {
    const allExchanges = await pool.query("SELECT * FROM exchange");
    res.json(allExchanges.rows);
  } catch (err) {
    console.error(err.message);
  }
});

//get an exchange

app.get("/exchanges/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const exchange = await pool.query("SELECT * FROM exchanges WHERE exchange_id = $1", [
      id
    ]);

    res.json(exchange.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//update an exchange

app.put("/exchanges/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { valute_from, valute_to, exchange_rate } = req.body; 
    const updateExchange = await pool.query(
      "UPDATE exchange SET value_from = $1, value_to = $2, exchange_rate = $3 WHERE exchange_id = $4",
      [valute_from, valute_to, exchange_rate, id]
    );

    res.json("Exchange was updated!");
  } catch (err) {
    console.error(err.message);
  }
});

//delete an exchange

app.delete("/exchanges/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteExchange = await pool.query("DELETE FROM exchange WHERE exchange_id = $1", [
      id
    ]);
    res.json("Exchange was deleted!");
  } catch (err) {
    console.log(err.message);
  }
});

app.listen(5000, () => {
  console.log("server has started on port 5000");
});
