import { Router } from "express";
import {
  getTasks,
  getTask,
  createTasks,
  updateTask,
  deleteTasks,
} from "../controllers/tasks.controllers.js";

const router = Router();

router.get("/api/tasks", getTasks);

router.get("/api/tasks/:id", getTask);

router.post("/api/tasks", createTasks);

router.put("/api/tasks/:id", updateTask);

router.delete("/api/tasks/:id", deleteTasks);

export default router;
