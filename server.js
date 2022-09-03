const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
require("dotenv").config()
const path = require("path")
const route = require("./Routes/routes")
const PORT = process.env.PORT || 4000
const app = express()
app.use(cors())
app.use(express.static(path.join(__dirname, "client", "build")))

//connect to the db
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
mongoose.connection.on("connected", () => {
    console.log("Connected to the MongoDB database!")
})

//data parsing
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//update this to the endpoint you declare in routes.js
app.use("/api/", route)

app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"))
})

app.listen( PORT, () => {
    console.log(`Connected to server on port ${PORT}!`)
})