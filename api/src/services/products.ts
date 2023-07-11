import { NotFoundError } from "../helpers/apiError";
import Product, { ProductDocument } from "../models/Product";

const createProductService = async (
  product: ProductDocument
): Promise<ProductDocument> => {
  return await product.save();
};

const getProductList = async (): Promise<ProductDocument[]> => {
  return await Product.find();
};

const getProductByIdService = async (
  productId: string
): Promise<ProductDocument> => {
  const foundProduct = await Product.findById(productId);
  if (!foundProduct) {
    throw new NotFoundError(`Product with ${productId} not found`);
  }
  return foundProduct;
};

export default { createProductService, getProductList, getProductByIdService };
