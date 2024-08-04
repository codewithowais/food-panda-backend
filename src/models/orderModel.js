const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
  restaurant: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Restaurant",
  },
  items: [
    {
      name: { type: String, required: true },
      quantity: { type: Number, required: true },
      price: { type: Number, required: true },
      imageUrl: { type: String, required: true },
    },
  ],
  totalPrice: { type: Number, required: true },
  status: {
    type: String,
    required: true,
    enum: ["confirmed", "processing", "on the way", "delivered"],
    default: "confirmed",
  },
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
