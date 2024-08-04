const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true }, // Add image URL field
});

const restaurantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  foods: [foodSchema],
});

const Restaurant = mongoose.model("Restaurant", restaurantSchema);

module.exports = Restaurant;
