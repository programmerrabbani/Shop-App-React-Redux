import { createSlug } from "../../helper/slug/createSlug.js";
import Product from "../../models/Product/Product.js";
import { unlinkSync } from "fs";

// get all product

export const getAllProduct = async (req, res, next) => {
  try {
    const data = await Product.find();
    res.status(200).json({
      products: data,
      message: "Get All Product Successful",
    });
  } catch (error) {
    next(error);
  }
};

// create a product

export const createProduct = async (req, res, next) => {
  try {
    const {
      name,
      regular_price,
      sale_price,
      stock,
      short_desc,
      long_desc,
      categories,
      brands,
      tags,
    } = req.body;

    // get product photo name

    // const photo = req.files[`product-photo`][0].filename;
    const photo = req.files.product_photo[0].filename;

    // get product gallery name

    const gallery = [];

    // [...req.files.[product-gallery-photo]].forEach((item) => {
    //   gallery.push(item.filename);
    // });

    [...req.files.product_gallery_photo].forEach((item) => {
      gallery.push(item.filename);
    });

    const data = await Product.create({
      name,
      slug: createSlug(name),
      regular_price,
      sale_price,
      stock,
      short_desc,
      long_desc,
      photo,
      gallery,
    });
    res.status(200).json({
      product: data,
      message: "Product Created Successful",
    });
  } catch (error) {
    next(error);
  }
};

// delete product

export const deleteProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await Product.findByIdAndDelete(id);

    // delete related files

    unlinkSync(`api/public/product/products/${data.photo}`);

    data.gallery.forEach((item) => {
      unlinkSync(`api/public/product/productGallery/${item}`);
    });

    res.status(200).json({
      products: data,
      message: "Delete Product Successful",
    });
  } catch (error) {
    next(error);
  }
};

// get single product

export const getSingleProduct = async (req, res, next) => {
  try {
    const { slug } = req.params;
    const data = await Product.findOne({ slug });
    res.status(200).json({
      products: data,
      message: "Get Single Product Successful",
    });
  } catch (error) {
    next(error);
  }
};

// update product

export const updateProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const {
      name,
      regular_price,
      sale_price,
      stock,
      short_desc,
      long_desc,
      categories,
      brands,
      tags,
    } = req.body;

    // update product data
    const product = await Product.findById(id);

    // product photo update

    let photo = product.photo;

    if (req.files.product_photo) {
      unlinkSync(`api/public/product/products/${product.photo}`);
      photo = req.files.product_photo[0].filename;
    }

    // product gallery update

    let old_gallery = product.gallery;
    let new_gallery = [];

    if (req.files.product_gallery_photo) {
      req.files.product_gallery_photo.forEach((item) => {
        new_gallery.push(item.filename);
      });
    }

    const final_gallery = old_gallery.concat(new_gallery);

    // update
    const data = await product.updateOne(
      {
        name,
        slug: createSlug(name),
        regular_price,
        sale_price,
        stock,
        short_desc,
        long_desc,
        photo,
        gallery: final_gallery,
      },
      { new: true }
    );

    res.status(200).json({
      products: data,
      message: "Product Update Successful",
    });
  } catch (error) {
    next(error);
  }
};
