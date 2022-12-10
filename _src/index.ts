import mongoose from "mongoose";
import { saveCustomProduct } from "./Models/productsModel";

mongoose.set("strictQuery", true);

mongoose
  .connect("mongodb://127.0.0.1:27017/testDB")
  .then(() => {
    console.log("connected To DB successfully !");
  })
  .catch(() => {
    console.log("no connected !");
  });

saveCustomProduct("product1 ", 200);
