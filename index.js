import express from "express"
import cors from "cors"
import dotenv from "dotenv"
dotenv.config()

const app = express()
app.use( express.json() )
app.use( cors() )

const PORT = process.env.PORT || 3030

app.get("/", (req, res) => {
    res.send("this is a get method")
})

app.post("/post", (req, res) => {
    res.send("this is a post method")
})

app.put("/update", (req, res) => {
    res.send("this is a update method")
})

app.delete("/delete", (req, res) => {
    res.send("this is a delete method")
})

app.listen(PORT, () => {
    console.log(`Listening to http://localhost:${PORT}`)
})
