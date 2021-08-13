import express from "express";
import { storeProject } from "../controllers/project-controller.js";
const router = express.Router();

router.post("/store", storeProject);
export default router;
