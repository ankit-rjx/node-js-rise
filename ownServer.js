const express = require("express");
const bodyParser = require("body-parser");
const db = require("./db.js");
const Person = require("./models/Person.js");
const Menu = require("./models/Menu.js");

const app = express();
app.use(bodyParser.json());

// Root route
app.get("/", (req, res) => {
  res.send("Welcome to My Hotel ... How can I help you!");
});

// POST route to add a new person
app.post("/person", async (req, res) => {
  try {
    const data = req.body;
    const newPerson = new Person(data);
    const savedPerson = await newPerson.save();
    console.log("Data saved");
    res.status(200).json(savedPerson);
  } catch (error) {
    console.error("Error saving person:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// GET route to fetch all people
app.get("/person", async (req, res) => {
  try {
    const data = await Person.find();
    console.log("Data fetched");
    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Start the server
app.listen(3000, () => {
  console.log("Listening on Port 3000");
});
