const mongoose = require("mongoose");

// Define MongoDB Connection URL
const mongoURL = "mongodb+srv://ankitraj:ankit0000@cluster0.hjfgfwh.mongodb.net/";

// Connect to MongoDB using Mongoose
mongoose.connect(mongoURL); // No need for deprecated options now

// Get the default connection
const db = mongoose.connection;

// Event listeners for the connection

db.on("connected", () => {
  console.log("✅ Connected to MongoDB Server");
});

db.on("error", (err) => {
  console.log("❌ Error Connecting to MongoDB:", err);
});

db.on("disconnected", () => {
  console.log("⚠️ MongoDB Disconnected");
});

// Export the database connection
module.exports = db;
