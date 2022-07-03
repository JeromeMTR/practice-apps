require("dotenv").config();
const express = require("express");
const path = require("path");
const db = require('./db.js')

const app = express();

app.use(express.json()); // for parsing application/json

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist"))); //

const handleResponse = (res, data, code) => res.status(code).send(data);
const handleError = (res, err) => res.status(500).send(err);

app.post('/glossary', (req, res) => { // promises ex:
  let obj = req.body;
  db.insert(obj)
    .then(() => handleResponse(res, '', 201))
    .catch(err => handleError(res, err))
})

app.get('/glossary', (req, res) => {
  db.get((err, glossary) => { //callback ex:
    if (err) {
      res.status(503).end();
    }
    res.status(200).json(glossary);
  })
})

app.delete('/glossary', (req, res) => { //promise ex:
  let obj = req.body;
  db.rm(obj)
    .then(words => handleResponse(res, words, 202))
    .catch(err => handleError(res, err));
})

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
