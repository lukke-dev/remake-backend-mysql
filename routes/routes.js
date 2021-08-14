import express from "express";
import { storeProject } from "../controllers/project-controller.js";
import { storeActivity } from "../controllers/activity-controller.js";
const router = express.Router();

router.post("/store", storeProject);

router.post("/activies/store", storeActivity);

export default router;
