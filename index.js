const express = require("express")
const fs = require("fs")
const mongoose = require("mongoose")
const cors = require("cors")
const countryRoute = require('./routes/country.route.js')

const app = express();

// cors 

app.use(cors({
    origin: "http://localhost:5173"
}))

// middleware

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use((req, res, next) => {
    fs.appendFile("log.txt", `${Date.now()} : ${req.method} : ${req.path}\n`, (err, data) => {
        next()
    })
})

// routes 

app.use('/api/countries', countryRoute)

app.get('/', (req, res) => {
    return res.send("Hey there im shivam")
})

mongoose.connect("mongodb+srv://mittalshivam440:yWdAm2sEaCbc21uf@countrydb.pbdwvw5.mongodb.net/Country-API?retryWrites=true&w=majority&appName=Countrydb")
    .then(() => {
        console.log("Databse connection succesfully done")
        app.listen(8000, () => console.log("Server start"))
    })
    .catch((err) => {
        console.log("Connection faild", err)
    })
