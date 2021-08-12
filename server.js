/* eslint-disable no-unused-vars */
require("dotenv").config();
const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");

app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const db = mysql.createConnection({
  user: 'root',
  host: 'localhost',
  password: 'senha',
  database: 'database_euax',

});

app.listen(process.env.PORT || 3001, () => {
  console.log("server start");
});

app.post('/store', (req, res) => {
  const name = req.body.name;
  const startDate = req.body.startDate;
  const endDate = req.body.endDate;

  db.query(
    "INSERT INTO projects (name, start_date, end_date) VALUES (?, ?, ?)",
    [name, startDate, endDate],
    (err, result) => {
      if(err) {
        console.log(err);
      }else {
        res.send('Values Inserted');
      }
    }
  )

})
