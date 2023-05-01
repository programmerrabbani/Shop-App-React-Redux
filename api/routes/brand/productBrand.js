import express from "express";
import {
  createProductBrand,
  deleteProductBrand,
  getAllProductBrands,
  getProductSingleBrand,
  updateBrandStatus,
  updateProductBrand,
} from "../../controllers/Brand/brandController.js";
import { productBrandMulter } from "../../utils/multer/multer.js";

// create router

const router = express.Router();

// routes

// Category Routes

router.get("/brand", getAllProductBrands);
router.post("/brand", productBrandMulter, createProductBrand);
router.get("/brand/:id", getProductSingleBrand);
router.delete("/brand/:id", deleteProductBrand);
router.put("/brand/:id", productBrandMulter, updateProductBrand);
router.patch("/brand-status/:id", updateBrandStatus);

// Brand Routes

// export

export default router;
