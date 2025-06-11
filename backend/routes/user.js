const express = require("express");
const router = express.Router();
const User = require("../models/User");

// Register a user
router.post("/register", async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.json({ message: "User registered" });
});

// Login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email, password });
  if (user) {
    res.json({ message: "Login successful" });
  } else {
    res.status(401).json({ message: "Login failed" });
  }
});

module.exports = router;
