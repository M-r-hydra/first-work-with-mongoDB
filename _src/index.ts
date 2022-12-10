import mongoose from "mongoose";
import { saveRandomProduct } from "./Models/productsModel";

mongoose.set("strictQuery", true);

mongoose
  .connect("mongodb://127.0.0.1:27017/testDB")
  .then(() => {
    console.log("connected To DB successfully !");
  })
  .catch(() => {
    console.log("no connected !");
  });

setInterval(() => {
  saveRandomProduct();
}, 0.00001);
