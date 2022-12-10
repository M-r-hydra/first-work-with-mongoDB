"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveRandomProduct = exports.saveProduct = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const productsSchema_1 = require("../schemas/productsSchema");
const ProductModel = mongoose_1.default.model("ProductModel_", productsSchema_1.ProductsSchema);
const Product = new ProductModel({
    name: `Product ${Math.round(Math.random() * 1500)}`,
    price: Math.round(Math.random() * 1500),
});
const saveProduct = (productName, productPrice) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield Product.save();
    console.log(res);
    return;
});
exports.saveProduct = saveProduct;
const saveRandomProduct = () => {
    const RandomProduct = new ProductModel({
        name: `Product ${Math.round(Math.random() * 9900000000)}`,
        price: Math.round(Math.random() * 9900000000),
    }).save();
};
exports.saveRandomProduct = saveRandomProduct;
