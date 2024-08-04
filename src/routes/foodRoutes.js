const express = require("express");
const router = express.Router();
const {
  addFood,
  getFoodsByRestaurant,
} = require("../controllers/foodController");
const { protect } = require("../middlewares/authMiddleware");

router.post("/", protect, addFood);
router.get("/:restaurantId", getFoodsByRestaurant);

module.exports = router;
