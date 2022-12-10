import mongoose from "mongoose";

export const ProductsSchema = new mongoose.Schema({
  name: String,
  price: Number,
});
