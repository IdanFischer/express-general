import express from "express"
import cors from "cors" 
import dotenv from "dotenv"
dotenv.config()

const app = express()
app.use( express.json() )
app.use( cors() )

const PORT = process.env.PORT || 3030

app.route('/class')
    .get( (req, res) => {
        res.send('this is a get method')
    })
    .delete( (req, res) => {
        res.send('this is a delete method')
    })
    .put( (req, res) => {
        res.send('this is a put method')
    })
    .post( (req, res) => {
        res.send('this is a post method')
    })

app.listen(PORT, () => {
    console.log(`listening on http://localhost:${PORT}`)
})
