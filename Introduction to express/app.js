// Core Modules
const http = require('http');

// External Modules
const express = require('express')

//lOcal module
const requestHandler = require('./user');

const app = express();

app.use("/",(req, res, next) => {
  console.log("Came in first middleware", req.url, req.method);
  res.send("<p>myself aditya singh<p>")
  next();
});

app.use("/submit-details", (req, res, next) => {
  console.log("Came in second middleware", req.url, req.method);
  res.send("<p> welcome i am learning node.js <p/>")
});



const PORT = 3002;
app.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});