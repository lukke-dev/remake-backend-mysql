import { db } from "../server.js";

export const storeActivity = (req, res) => {
  const projectId = req.body.projectId;
  const activity = req.body.activity;
  const startActivity = req.body.startActivity;
  const endActivity = req.body.endActivity;
  db.query(
    "INSERT INTO activies (project_id, name_activity, start_date, end_date) VALUES (?, ?, ?, ?)",
    [projectId, activity, startActivity, endActivity],
    (err) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Activity Inserted");
      }
    }
  );
};
