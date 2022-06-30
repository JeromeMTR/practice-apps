require("dotenv").config();
const express = require("express");
const path = require("path");
const db = require('./db.js')

const app = express();

app.use(express.json()); // for parsing application/json

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));


app.get('/glossary', (req, res) => {
  db.get((err, glossary) => {
    if (err) {
      res.status(503).end();
    }
    res.status(200).json(glossary);
  })
})

app.post('/glossary', (req, res) => {
  let obj = req.body;
  db.insert(obj, (err) => {
    if (err) {
      res.status(503).end();
    }
    res.status(201).end();
  })
})

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
