// const src = require("./src");
const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//Middlewares
app.use(cors());
app.use(express.json()); //req.body

//ROUTES//

//create user

app.post("/user", async (req, res) => {
  try {
    // console.log(req.body);

    const { email_id, pwd, phone } = req.body;
    const newUser = await pool.query(
      "INSERT INTO customers (email_id, pwd, phone) VALUES($1, $2, $3) RETURNING *",
      [email_id, pwd, phone]
    );

    res.json(newUser.rows[0]);
  } catch (error) {
    console.log(error.message);
  }
});

//get all users

app.get("/users", async (req, res) => {
  try {
    const allUsers = await pool.query("SELECT * FROM customers");
    res.json(allUsers.rows);
  } catch (error) {
    console.log(error.message);
  }
});

//get a user

app.get("/users/:id", async (req, res) => {
  try {
    // console.log(req.params);

    const { id } = req.params;
    const user = await pool.query(
      "SELECT * FROM customers WHERE email_id = $1",
      [id]
    );

    res.json(user.rows[0]);
  } catch (error) {
    console.log(error.message);
  }
});

//update a user

//delete a user

app.listen(5000, () => {
  console.log("Server has started on port: 5000");
});
