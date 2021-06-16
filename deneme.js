// middleware tutorial

const express = require("express");
const app = express();

const authorize = require("./authorize");

// req => middleware => res

app.use(authorize);

app.get("/", (req, res) => {
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();
  console.log(method, url, time);
  res.send("Home Page");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.listen(5000, () => {
  console.log("Server listening on port 5000..");
});
