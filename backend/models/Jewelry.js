const mongoose = require("mongoose");

const JewelrySchema = new mongoose.Schema({
  name: { type: String, required: true },
  imageUrl: { type: String, required: true }
});

module.exports = mongoose.model("Jewelry", JewelrySchema);

