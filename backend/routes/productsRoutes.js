import express from "express";
const router = express.Router();
import {
  getProducts,
  getProductById,
} from "../controllers/productController.js";

//Get all products api/products
router.route("/").get(getProducts);

// Get single products based on id api/product/:id
router.route("/:id").get(getProductById);

export default router;
