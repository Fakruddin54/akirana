const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    products: [
      {
        type: mongoose.ObjectId,
        ref: "Products",
      },
    ],
    payment: {},
    buyer: {
      type: mongoose.ObjectId,
      ref: "users",
    },
    status: {
      type: String,
      default: "Not Process",
      enum: [
        "Not Process",
        "Your Order being Packed",
        "Out For Delivery",
        "Delivered",
        "Sorry But Your Order is Cancel If money Deducted will be Back to your account within 6 Business Day ",
      ],
    },
  },
  { timestamps: true }
);

const orderModel = mongoose.model("Order", orderSchema);
module.exports = orderModel;
