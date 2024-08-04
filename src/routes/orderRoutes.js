const express = require("express");
const router = express.Router();
const {
  createOrder,
  updateOrderStatus,
  getOrderById,
} = require("../controllers/orderController");
const { protect } = require("../middlewares/authMiddleware");

router.post("/", protect, createOrder);
router.put("/status", protect, updateOrderStatus);
router.get("/:orderId", protect, getOrderById);

module.exports = router;
