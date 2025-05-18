import express from "express";
import config from "./config.js";
import taskRoutes from "./routes/tasks.routes.js";
import cors from "cors";

const app = express();

app.set("port", config.port);

app.use(express.json());

const corsOptions = {
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE"],
};

console.log("prueba")
app.use(cors(corsOptions));
app.use(taskRoutes);



export default app;