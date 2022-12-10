import mongoose from "mongoose";
import { ProductsSchema } from "../schemas/productsSchema";

const ProductModel = mongoose.model("ProductModel_", ProductsSchema);

const Product = new ProductModel({
  name: `Product ${Math.round(Math.random() * 1500)}`,
  price: Math.round(Math.random() * 1500),
});

export const saveProduct = async (
  productName: string,
  productPrice: number
) => {
  const res = await Product.save();
  console.log(res);
  return;
};

export const saveRandomProduct = () => {
  const RandomProduct = new ProductModel({
    name: `Product ${Math.round(Math.random() * 9900000000)}`,
    price: Math.round(Math.random() * 9900000000),
  }).save();
};
