const express = require("express")
const booksRoutes = require("./routes/books")
const mongoose = require("mongoose")

const app = express()

const SERVER_PORT = 3001

app.use(express.json())
app.use(express.urlencoded())

const DB_PASSWORD = "Xcj0m4ZztnoqO5F0"
const DB_USER = "sa"
const DB_NAME = "week06_booksdb"

const DB_CONNECTION_STRING = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.7wn4nmp.mongodb.net/${DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`

// mongoose.connect("mongodb://localhost:27017/booksdb", {useNewUrlParser: true})
const dbConnection = async () => {
    try{
        await mongoose.connect(DB_CONNECTION_STRING, {useNewUrlParser: true, useUnifiedTopology: true})
        console.log("Connected to MongoDB")
    } catch (error) {
        console.error("Error connecting to MongoDB")
        console.error(error)
    }
}

app.use("/api/v1", booksRoutes)

app.route("/")
    .get((req, res) => {
        res.send("<h1>MogoDB + Mongoose Example</h1>")
    })

app.listen(SERVER_PORT, () =>{
    dbConnection()
    console.log(`Server running at http://localhost:${SERVER_PORT}/`)
})
