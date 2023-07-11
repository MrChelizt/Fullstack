import mongoose, { Document } from "mongoose";

export type ProductDocument = Document & {
  name: string;
  image: string;
  castingTime: string;
  range: string;
  duration: string;
  components: string;
  price: number;
  details: string;
};

export const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  castingTime: {
    type: String,
    required: true,
  },
  range: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  components: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
  details: {
    type: String,
    required: true,
  },
});

export default mongoose.model<ProductDocument>("Product", ProductSchema);
