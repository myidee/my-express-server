const express = require("express");

const app = express();

app.get("/", function (req, res) {
  res.send("hello");
});

app.get("/contact", function (req, res) {
  res.send("<h1>Contact me</h1>");
});

app.get("/about", function (req, res) {
  res.send("<h2>About me</h2>");
});

app.get("/hobbies", function (req, res) {
  res.send("<Ul><li>photography</li><li>reading</li><li>coding</li></Ul>");
});

app.listen(3000, function () {
  console.log("server started on port 3000");
});
