const express = require("express");
const router = express.Router();
const {
  createOrder,
  updateOrderStatus,
  getOrderById,
  getAllOrders,
} = require("../controllers/orderController");
const { protect } = require("../middlewares/authMiddleware");

router.post("/", protect, createOrder);
router.put("/status", protect, updateOrderStatus);
router.get("/:orderId", protect, getOrderById);
router.get("/", protect, getAllOrders);

module.exports = router;
