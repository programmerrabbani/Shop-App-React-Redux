import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import cors from "cors";
import mongoDBConnect from "./config/db.js";
import { errorHandle } from "./middlewares/errorHandler.js";
import productCategoryRoute from "./routes/category/productCategory.js";
import productBrandRoute from "./routes/brand/productBrand.js";
import productTagRoute from "./routes/tag/productTag.js";
import productRoute from "./routes/product/product.js";

// environment veritable

dotenv.config();
const PORT = process.env.PORT || 9090;

// init express

const app = express();

// middleware

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

//static folder set

app.use(express.static("api/public"));

// routes

app.use("/api/v1/product", productCategoryRoute);
app.use("/api/v1/product", productBrandRoute);
app.use("/api/v1/product", productTagRoute);
app.use("/api/v1/product", productRoute);

// use error handle

app.use(errorHandle);

// listen server

app.listen(PORT, () => {
  mongoDBConnect();
  console.log(` Server Is Running On Port ${PORT} `.bgGreen.black);
});
