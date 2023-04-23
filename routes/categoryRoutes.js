const express = require("express");
const {
  categoryController,
  createCategoryController,
  deleteCategoryController,
  singleCategoryController,
  updateCategoryController,
} = require("../controllers/categoryControllers");
const { isAdmin, requireSignIn } = require("../middlewares/authMiddleware");

const router = express.Router();

// create category || create
router.post(
  "/create-category",
  requireSignIn,
  isAdmin,
  createCategoryController
);
// update category || update

router.put(
  "/update-category/:id",
  requireSignIn,
  isAdmin,
  updateCategoryController
);
// all category || read all
router.get("/get-category", categoryController);

// single category || read one by One
router.get("/single-category/:id", singleCategoryController);

//delete category
router.delete(
  "/delete-category/:id",
  requireSignIn,
  isAdmin,
  deleteCategoryController
);

module.exports = router;
