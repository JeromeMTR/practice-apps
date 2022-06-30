require("dotenv").config();
const express = require("express");
const path = require("path");
const db = require('./db.js')

const app = express();

app.use(express.json()); // for parsing application/json

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));


app.get(/* endpoint */ (req, res) => {

})

app.post(/* endpoint */ (req, res) => {

})

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
