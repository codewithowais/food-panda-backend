const Restaurant = require("../models/restaurantModel");

// Add food to a restaurant
const addFood = async (req, res) => {
  const { restaurantId, name, price, description, imageUrl } = req.body;

  try {
    const restaurant = await Restaurant.findById(restaurantId);

    if (!restaurant) {
      return res.status(404).json({ message: "Restaurant not found" });
    }

    const newFood = { name, price, description, imageUrl };

    restaurant.foods.push(newFood);
    await restaurant.save();

    res.status(201).json(restaurant);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all foods for a restaurant
const getFoodsByRestaurant = async (req, res) => {
  const { restaurantId } = req.params;

  try {
    const restaurant = await Restaurant.findById(restaurantId);

    if (!restaurant) {
      return res.status(404).json({ message: "Restaurant not found" });
    }

    res.json(restaurant.foods);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { addFood, getFoodsByRestaurant };
