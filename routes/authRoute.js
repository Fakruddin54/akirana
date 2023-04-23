const express = require("express");
const {
  registerController,
  loginController,
  testController,
  getOrderController,
  forgotPasswordController,
  updateProfileController,
  getAllOrderController,
  orderStatusController,
} = require("../controllers/authController");
const { isAdmin, requireSignIn } = require("../middlewares/authMiddleware");

//router object
const router = express.Router();

//routing
//REGISTER || METHOD POST
router.post("/register", registerController);

//LOGIN || POST
router.post("/login", loginController);

//test routes
router.get("/test", requireSignIn, isAdmin, testController);

//Forgot Password || POST
router.post("/forgot-password", forgotPasswordController);

//protected User route auth || Get
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});

//protected Admin route auth ||Get
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});
// updating Userrs
router.put("/profile", requireSignIn, updateProfileController);

// orders of users
router.get("/orders", requireSignIn, getOrderController);

// all orders of users
router.get("/all-orders", requireSignIn, isAdmin, getAllOrderController);

// all orders status updating

router.put(
  "/all-status/:orderId",
  requireSignIn,
  isAdmin,
  orderStatusController
);

module.exports = router;
