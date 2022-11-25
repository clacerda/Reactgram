require("dotenv").config()

const express = require("express")
const path = require("path")
const cors = require("cors")

const port = process.env.PORT;

const app = express();

// Config json and form data
app.use(express.json())
app.use(express.urlencoded({extended: false}))

//routes
const router = require("./routes/Router.js")

app.listen(port, () => {
    console.log(`App rodando na porta ${port}`)
})