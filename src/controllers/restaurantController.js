const Restaurant = require("../models/restaurantModel");

// Create a new restaurant
const createRestaurant = async (req, res) => {
  const { name, address, foods } = req.body;

  try {
    const restaurant = new Restaurant({
      name,
      address,
      foods,
    });

    await restaurant.save();

    res.status(201).json(restaurant);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all restaurants
const getRestaurants = async (req, res) => {
  try {
    const restaurants = await Restaurant.find();
    res.json(restaurants);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get restaurant by ID
const getRestaurantById = async (req, res) => {
  const { id } = req.params;

  try {
    const restaurant = await Restaurant.findById(id);

    if (!restaurant) {
      return res.status(404).json({ message: "Restaurant not found" });
    }

    res.json(restaurant);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createRestaurant, getRestaurants, getRestaurantById };
