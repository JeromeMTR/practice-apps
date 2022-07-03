require("dotenv").config();
const express = require("express");
const path = require("path");
const sessionHandler = require("./middleware/session-handler");
const logger = require("./middleware/logger");

// Establishes connection to the database on server start
const db = require("./db");

const app = express();

app.use(express.json()); // parse json/application to readable data

// Adds `req.session_id` based on the incoming cookie value.
// Generates a new session if one does not exist.
app.use(sessionHandler);

// Logs the time, session_id, method, and url of incoming requests.
app.use(logger);

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));

app.post('/checkout', (req, res) => {
  console.log(req.session_id.length);
  let placeHolder = [req.session_id];
  for (var key in req.body) {
    for (var label in req.body[key]) {
      placeHolder.push(req.body[key][label]);
    }
  }
  console.log(placeHolder);
  db.queryAsync('INSERT INTO Summary  VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', placeHolder)
    .then(() => res.status(201).end());
});

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
