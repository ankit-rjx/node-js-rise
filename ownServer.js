// Import the Express framework
const express = require("express");

// Initialize the Express application
const app = express();

// Import the MongoDB connection from db.js
const db = require("./db.js");

// Using bodyParser
const bodyParser = require("body-parser");
app.use(bodyParser.json()); // req.body - yaha par sara chej store ho jata hai .

const Person = require("./models/Person.js");

// Define a basic route
app.get("/", (req, res) => {
  res.send("Welcome to My Hotel ... How can I help you!");
});

// Start the server and listen on port 3000
app.listen(3000, () => {
  console.log("Listening on Port 3000");
});

// Note: Port 3000 is like a "room number" assigned to our application on localhost
