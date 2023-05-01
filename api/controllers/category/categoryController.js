import { createSlug } from "../../helper/slug/createSlug.js";
import Category from "../../models/Category/Category.js";
import { createError } from "./../../utils/error/createError.js";

// GET ALL CATEGORY

export const getAllProductCategory = async (req, res, next) => {
  try {
    const data = await Category.find();
    res.status(200).json({
      categories: data,
      message: "Get All Data Success",
    });
  } catch (error) {
    next(error);
  }
};

// POST CATEGORY

export const createProductCategory = async (req, res, next) => {
  try {
    const { name } = req.body;

    const data = await Category.create({
      name,
      slug: createSlug(name),
      photo: req.file.filename,
    });
    res.status(200).json({
      category: data,
      message: "Category Add Successful",
    });
  } catch (error) {
    next(error);
  }
};

// SINGLE CATEGORY

export const singleProductCategory = async (req, res, next) => {
  try {
    const { slug } = req.params;

    const data = await Category.findOne({ slug });
    res.status(200).json({
      category: data,
      message: "Single Category Found Successful",
    });
  } catch (error) {
    next(createError("Single Product Not Found", 404));
  }
};

// DELETE CATEGORY

export const deleteProductCategory = async (req, res, next) => {
  try {
    const { id } = req.params;

    await Category.findByIdAndDelete(id);
    res.status(200).json({
      message: " Category Delete Successful",
    });
  } catch (error) {
    next(error);
  }
};

// EDIT CATEGORY

export const updateProductCategory = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, photo } = req.body;

    const data = await Category.findByIdAndUpdate(
      id,
      {
        name,
        slug: createSlug(name),
        photo: req.file?.filename ? req.file?.filename : photo,
      },
      { new: true }
    );
    res.status(200).json({
      category: data,
      message: " Category Updated Successful",
    });
  } catch (error) {
    next(error);
  }
};
// UPDATE CATEGORY STATUS

export const updateCategoryStatus = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const data = await Category.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );
    res.status(200).json({
      category: data,
      message: " Category Status Updated Successful",
    });
  } catch (error) {
    next(error);
  }
};
