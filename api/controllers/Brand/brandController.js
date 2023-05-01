import { createSlug } from "../../helper/slug/createSlug.js";
import Brand from "../../models/Brand/Brand.js";

// GET ALL BRANDS

export const getAllProductBrands = async (req, res, next) => {
  try {
    const data = await Brand.find();
    res.status(200).json({
      brands: data,
      message: "Get All Brands Successful",
    });
  } catch (error) {
    next(error);
  }
};

// CREATE A BRAND

export const createProductBrand = async (req, res, next) => {
  try {
    const { name } = req.body;

    const data = await Brand.create({
      name,
      slug: createSlug(name),
      photo: req.file.filename,
    });
    res.status(200).json({
      brand: data,
      message: "Create A Brand Successful",
    });
  } catch (error) {
    next(error);
  }
};

//  GET SINGLE BRAND

export const getProductSingleBrand = async (req, res, next) => {
  try {
    const { id } = req.params;

    const data = await Brand.findById(id);
    res.status(200).json({
      brand: data,
      message: "Get Single Brand Successful",
    });
  } catch (error) {
    next(error);
  }
};

//  DELETE A BRAND

export const deleteProductBrand = async (req, res, next) => {
  try {
    const { id } = req.params;

    const data = await Brand.findByIdAndDelete(id);
    res.status(200).json({
      brand: data,
      message: "Delete Brand Successful",
    });
  } catch (error) {
    next(error);
  }
};

//  UPDATE A BRAND

export const updateProductBrand = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, photo } = req.body;

    const data = await Brand.findByIdAndUpdate(
      id,
      {
        name,
        slug: createSlug(name),
        photo: req.file?.filename ? req.file?.filename : photo,
      },
      { new: true }
    );
    res.status(200).json({
      brand: data,
      message: "Update Brand Successful",
    });
  } catch (error) {
    next(error);
  }
};
//  UPDATE A STATUS

export const updateBrandStatus = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const data = await Brand.findByIdAndUpdate(id, { status }, { new: true });
    res.status(200).json({
      brand: data,
      message: "Update Brand Status Successful",
    });
  } catch (error) {
    next(error);
  }
};
