import mongoose from "mongoose";

// create product schema

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    regular_price: {
      type: Number,
      required: true,
    },
    sale_price: {
      type: Number,
    },
    stock: {
      type: Number,
      default: null,
    },
    short_desc: {
      type: String,
      trim: true,
    },
    long_desc: {
      type: String,
      trim: true,
    },
    photo: {
      type: String,
      required: true,
      default: null,
      trim: true,
    },
    gallery: {
      type: Array,
      default: null,
      trim: true,
    },
    categories: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Category",
      default: [],
    },
    tags: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Tag",
      default: [],
    },
    brands: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Brand",
      default: null,
    },
    status: {
      type: Boolean,
      default: true,
    },
    trash: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

// export

export default mongoose.model("Product", productSchema);
