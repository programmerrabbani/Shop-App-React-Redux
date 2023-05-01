import express from "express";
import {
  createProductTag,
  deleteProductTag,
  getAllProductTags,
  singleProductTag,
  updateProductTag,
  updateTagStatus,
} from "../../controllers/Tag/tagController.js";

// create router
const router = express.Router();

// routes

router.route("/tag").get(getAllProductTags).post(createProductTag);
router.route("/tag-status/:id").patch(updateTagStatus);
router
  .route("/tag/:id")
  .get(singleProductTag)
  .delete(deleteProductTag)
  .put(updateProductTag);

// export
export default router;
