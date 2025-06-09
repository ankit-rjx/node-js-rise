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

app.post("/person", (req, res) => {
  const data = req.body; // Assuming the body contains the person data
  const newPerson = new Person(data);
  // newPerson.name = data.name;
  // newPerson.age = data.age;
  // newPerson.mobile = data.mobile;
  // newPerson.email = data.email;
  // newPerson.salary = data.salary;
  // newPerson.age = data.salary;
  // newPerson.address = data.address;

  newPerson.save((error, savedPerson) => {
    if (error) {
      console.log("Error saving person: ", error);
      res.status(500).json({
        error: "Internal Server Error",
      });
    }else{
      console.log('data saved successfully');
      res.status(200).json(savedPerson)
    }
  });
});

// Start the server and listen on port 3000
app.listen(3000, () => {
  console.log("Listening on Port 3000");
});

// Note: Port 3000 is like a "room number" assigned to our application on localhost

// 38:11
