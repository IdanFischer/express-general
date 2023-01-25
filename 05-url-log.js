import express from "express"
import cors from "cors"
import dotenv from "dotenv"
dotenv.config()

const app = express()
app.use( express.json() )
app.use( cors() )
app.use(urlLOG)

const PORT = process.env.PORT || 3030

app.get(`/`, (req, res) => {
    console.log("05-URL log: this is root")
})

function urlLOG(req, res, next) {
    const logResult = `${req.protocol}://${req.hostname}${req.originalUrl} ${new Date()}`
    console.log(logResult)
    next()
}

app.listen(PORT, () => {
    console.log(`Listening on http://localhost${PORT}`)
})
