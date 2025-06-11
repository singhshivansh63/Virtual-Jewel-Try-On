const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose.connect("mongodb://localhost:27017/virtual-jewel")
  .then(() => console.log("✅ MongoDB Connected Successfully"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// Load Jewelry model
const Jewelry = require("./models/Jewelry");

// Routes

// Test route
app.get("/api/test", (req, res) => {
  res.json({ message: "API is working" });
});

// Get all jewelry items
app.get("/api/jewelry", async (req, res) => {
  try {
    const items = await Jewelry.find(); // Fetch all jewelry
    res.json(items);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch jewelry" });
  }
});

// Add new jewelry item (optional, for testing)
app.post("/api/jewelry", async (req, res) => {
  try {
    const newItem = new Jewelry(req.body);
    await newItem.save();
    res.status(201).json(newItem);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to save jewelry" });
  }
});

// Start server
app.listen(5000, () => console.log("🚀 Server running on port 5000"));





