import express from "express";
import cors from "cors"
import dotenv from "dotenv"
import data from "./data/data-mock.json" assert {type: "json"}
dotenv.config()

const app = express()
app.use(express.json())
app.use(cors())
const PORT = process.env.PORT

app.get("class/:id", (req, res) => {
    
})

app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`)
})
