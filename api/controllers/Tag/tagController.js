import { createSlug } from "../../helper/slug/createSlug.js";
import Tag from "../../models/Tag/Tag.js";

// get all tags

export const getAllProductTags = async (req, res, next) => {
  try {
    const data = await Tag.find();
    res.status(200).json({
      tags: data,
      message: "Get All Tags successful",
    });
  } catch (error) {
    next(error);
  }
};

// Create a tag

export const createProductTag = async (req, res, next) => {
  try {
    const { name } = req.body;
    const data = await Tag.create({ name, slug: createSlug(name) });
    res.status(200).json({
      tag: data,
      message: "Tag Create successful",
    });
  } catch (error) {
    next(error);
  }
};

//  get single tag

export const singleProductTag = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await Tag.findById(id);
    res.status(200).json({
      tag: data,
      message: "Get Single Tag successful",
    });
  } catch (error) {
    next(error);
  }
};

//  delete a tag

export const deleteProductTag = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await Tag.findByIdAndDelete(id);
    res.status(200).json({
      tag: data,
      message: "Tag Delete successful",
    });
  } catch (error) {
    next(error);
  }
};

// Edit a tag

export const updateProductTag = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, slug } = req.body;
    const data = await Tag.findByIdAndUpdate(
      id,
      { name, slug: createSlug(name) },
      { new: true }
    );
    res.status(200).json({
      tag: data,
      message: "Tag Update successful",
    });
  } catch (error) {
    next(error);
  }
};

// Update tag Status

export const updateTagStatus = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const data = await Tag.findByIdAndUpdate(id, { status }, { new: true });
    res.status(200).json({
      tag: data,
      message: "Tag Status Update successful",
    });
  } catch (error) {
    next(error);
  }
};
