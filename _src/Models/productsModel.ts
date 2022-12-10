import mongoose from "mongoose";
import { ProductsSchema } from "../schemas/productsSchema";

const ProductModel = mongoose.model("ProductModel_", ProductsSchema);

export const saveCustomProduct = async (
  productName: string,
  productPrice: number
) => {
  const Product = new ProductModel({
    name: productName,
    price: productPrice,
  });
  Product.save();
};
