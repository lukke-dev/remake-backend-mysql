import dotenv from 'dotenv'
import express from 'express';
import mysql from 'mysql2'
import cors from 'cors';
import routes from './routes/routes.js'

const app = express();
dotenv.config({ path: './.env.local' })
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use('/', routes)

export const db = mysql.createConnection({
  user: process.env.USER_DB,
  host: process.env.HOST,
  password: process.env.PASSWORD,
  database: process.env.DB,
});
app.listen(process.env.PORT || 3001, () => {
  console.log("server start");
});

