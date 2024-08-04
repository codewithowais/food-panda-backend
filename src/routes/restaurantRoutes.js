const express = require("express");
const router = express.Router();
const {
  createRestaurant,
  getRestaurants,
  getRestaurantById,
} = require("../controllers/restaurantController");
const { protect } = require("../middlewares/authMiddleware");

router.post("/", protect, createRestaurant);
router.get("/", getRestaurants);
router.get("/:id", getRestaurantById);

module.exports = router;
