const express = require("express");
const router = express.Router();
const Jewelry = require("../models/Jewelry");

// GET all jewelry
router.get("/", async (req, res) => {
  const items = await Jewelry.find();
  res.json(items);
});

// POST new jewelry
router.post("/", async (req, res) => {
  const newItem = new Jewelry(req.body);
  await newItem.save();
  res.json({ message: "Jewelry item added!" });
});

module.exports = router;

