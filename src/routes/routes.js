import { Router } from "express";
import { getTest } from "../controllers/controller.index.js";
const router = Router();

router.get("/", getTest);

export default router;
