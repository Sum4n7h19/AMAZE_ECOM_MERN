import express from "express";
const router = express.Router();
import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  createProductReviews,
  getTopProducts,
} from "../controllers/productController.js";
import { protect, admin } from "../middleware/authMiddleware.js";
import checkObjectId from "../middleware/checkObjectId.js";

//Get all products api/products
router.route("/").get(getProducts).post(protect, admin, createProduct);
router.route("/top").get(getTopProducts);

// Get single products based on id api/product/:id
router
  .route("/:id")
  .get(checkObjectId, getProductById)
  .put(protect, admin, checkObjectId, updateProduct)
  .delete(protect, admin, checkObjectId, deleteProduct);
router.route("/:id/reviews").post(protect,checkObjectId, createProductReviews);

export default router;
