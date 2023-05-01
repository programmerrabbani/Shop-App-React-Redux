import multer from "multer";

// create multer

const storage = multer.diskStorage({
  filename: (req, file, cb) => {
    cb(null, Date.now() + "_" + file.originalname);
  },
  destination: (req, file, cb) => {
    if (file.fieldname == "category-photo") {
      cb(null, "api/public/categories");
    }
    if (file.fieldname == "brand-photo") {
      cb(null, "api/public/brands");
    }
    if (file.fieldname == "product_photo") {
      cb(null, "api/public/product/products");
    }
    if (file.fieldname == "product_gallery_photo") {
      cb(null, "api/public/product/productGallery");
    }
  },
});

// product category middleware

export const productCategoryMulter = multer({ storage }).single(
  "category-photo"
);
export const productBrandMulter = multer({ storage }).single("brand-photo");

export const productMulter = multer({ storage }).fields([
  {
    name: "product_photo",
    maxCount: 1,
  },
  {
    name: "product_gallery_photo",
    maxCount: 10,
  },
]);
