import { db } from "../server.js";

export const storeProject = (req, res) => {
  const name = req.body.name;
  const startDate = req.body.startDate;
  const endDate = req.body.endDate;

  db.query(
    "INSERT INTO projects (name, start_date, end_date) VALUES (?, ?, ?)",
    [name, startDate, endDate],
    (err) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Project Inserted");
      }
    }
  );
};
