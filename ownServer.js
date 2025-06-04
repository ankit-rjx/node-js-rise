const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to My Hotel ... How i can help you ! ");
});

app.listen(3000); // localhost me haamre application ke liye ek room number allot hua hai
