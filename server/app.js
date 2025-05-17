import express from "express"
import config from "./config.js"
import taskRutes from "./routes/tasks.routes.js"
import cors from "cors"

const app = express()

let port

//setings

app.set("port", config.port)

//middlewares


app.use(express.json())



const corsOptions = {
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};

app.use(cors(corsOptions));



app.use(taskRutes); 

app.get("/", (req, res) => {
  res.send("API Backend está en línea ✅");
});





export default app