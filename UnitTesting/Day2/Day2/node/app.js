const express = require("express");
const app = express();

app.get("/endpoint3", (req, res) => {
  res.status(200).send("hello world");
});

app.get("/endpoint2", (req, res) => {
  res.status(200).send("hello world 2");
});

var server = app.listen(3000);
module.exports = server;
