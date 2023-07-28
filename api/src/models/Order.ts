import mongoose, { Document } from "mongoose";

import { ProductDocument, ProductSchema } from "./Product";

export type ProductOrder = ProductDocument & {
  quantity: number;
};

export type OrderDocument = Document & {
  createdAt: Date;
  productList: ProductOrder[];
  userId: string;
};

const ProductOrderSchema = new mongoose.Schema({
  name: { type: String },
  price: { type: Number },
  quantity: { type: Number },
});

const OrderSchema = new mongoose.Schema({
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
  productList: [ProductOrderSchema],
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  total: { type: Number },
});

export default mongoose.model<OrderDocument>("Order", OrderSchema);
