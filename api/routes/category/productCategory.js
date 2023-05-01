import express from "express";
import {
  createProductCategory,
  deleteProductCategory,
  getAllProductCategory,
  singleProductCategory,
  updateCategoryStatus,
  updateProductCategory,
} from "../../controllers/category/categoryController.js";
import { productCategoryMulter } from "../../utils/multer/multer.js";

// create router

const router = express.Router();

// routes

// Category Routes

router.get("/category", getAllProductCategory);
router.post("/category", productCategoryMulter, createProductCategory);
router.get("/category/:slug", singleProductCategory);
router.delete("/category/:id", deleteProductCategory);
router.put("/category/:id", productCategoryMulter, updateProductCategory);
router.patch("/category-status/:id", updateCategoryStatus);

// Brand Routes

// export

export default router;
