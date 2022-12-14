"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.ProductsSchema = new mongoose_1.default.Schema({
    name: String,
    price: Number,
});
