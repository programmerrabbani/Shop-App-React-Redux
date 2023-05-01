import express from "express";
import {
  createProduct,
  deleteProduct,
  getAllProduct,
  getSingleProduct,
  updateProduct,
} from "../../controllers/Product/productController.js";
import { productMulter } from "../../utils/multer/multer.js";

// create router

const router = express.Router();

// routes

router.route("/").get(getAllProduct).post(productMulter, createProduct);
router.route("/:slug").get(getSingleProduct);
router.route("/:id").delete(deleteProduct).put(productMulter, updateProduct);

// export

export default router;
