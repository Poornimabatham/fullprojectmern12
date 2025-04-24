// models/Features.js
const mongoose = require("mongoose");

const featureSchema = new mongoose.Schema({
  FeaturesId: { type: String, required: true, unique: true },
  title: String,
  description: String,
  image: String,
  price: Number,
});

module.exports.insertfeaturesSchema = mongoose.model("Features", featureSchema);
