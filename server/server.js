const path = require('path')
const express = require('express')
const fs = require('fs')
const app = express()

// import createFood from "foodController.js"

app.use(express.json())
app.use(express.urlencoded())

app.get('/', (req,res)=> {
    res.send('Get received')
  })

const { foodController } = require( "./controllers/foodController.js");

app.post('/', (req, res) => {
    const { foodSelector, foodSelector1, foodSelector2 } = req.body
    console.log(foodSelector)
    console.log(foodSelector1)
    console.log(foodSelector2)
    res.send('Post received')
})

app.listen(3000)
console.log('listening')

const db = require("./models/foodModel.js")

const MONGO_DB = "mongodb+srv://hoonpark1:hoon1234@cluster0.6ksa7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

const mongoose = require('mongoose');

mongoose
.connect(MONGO_DB)
    .then(() => {
        console.log("Successfully connected to MongoDB.");
    })
    .catch(err => {
        console.error("Connection error", err);
        process.exit();
    });