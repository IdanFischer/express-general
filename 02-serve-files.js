import express from "express"
import cors from"cors"
import dotenv from "dotenv"
dotenv.config

const app = express()
    app.use( express.json() )
    app.use( cors() )

const PORT = process.env.PORT || 3030

// Serve images dir 
app.use(express.static('public'))


app.use("/Idan", express.static("images")) // it reroutes the user to the images dir, then select a file from it.


// app.get("/", (req, res) => {
//     res.send("root")
// })

app.listen(PORT, () => {
    console.log(`Listening to http://localhost${PORT}`)
})