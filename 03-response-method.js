import express from "express"
import cors from "cors"
import dotenv from "dotenv"
dotenv.config()

const app = express()
    app.use( express.json() )
    app.use( cors() )
 const PORT = process.env.PORT
 
app.get("/redirect", (req, res) => {
    res.redirect("https://bocacode.com/")
})

app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`)
})