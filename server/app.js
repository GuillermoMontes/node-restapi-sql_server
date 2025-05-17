import express from "express"
import config from "./config"
import taskRutes from "./routes/tasks.routes"
import cors from "cors"

const app = express()

let port

//setings

app.set("port", config.port)

//middlewares

app.use(cors())
app.use(express.json())


app.use(taskRutes)



export default app