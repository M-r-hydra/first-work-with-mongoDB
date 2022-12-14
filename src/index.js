"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const productsModel_1 = require("./Models/productsModel");
mongoose_1.default.set("strictQuery", true);
mongoose_1.default
    .connect("mongodb://127.0.0.1:27017/testDB")
    .then(() => {
    console.log("connected To DB successfully !");
})
    .catch(() => {
    console.log("no connected !");
});
(0, productsModel_1.saveCustomProduct)("product1 ", 200);
