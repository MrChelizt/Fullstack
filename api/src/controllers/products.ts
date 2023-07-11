// product controller here
import { NextFunction, Request, Response } from "express";

import Product from "../models/Product";
import productServices from "../services/products";

export const createProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const {
    name,
    image,
    castingTime,
    range,
    duration,
    components,
    price,
    details,
  } = req.body;

  const productInformation = new Product({
    name: name,
    image: image,
    castingTime: castingTime,
    range: range,
    duration: duration,
    components: components,
    price: price,
    details: details,
  });

  try {
    const product = await productServices.createProductService(
      productInformation
    );
    res.status(200).json(product);
  } catch (error) {
    next(error);
  }
};

export const getAllProducts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const productList = await productServices.getProductList();
    res.status(200).json(productList);
  } catch (error) {
    next(error);
  }
};

export const getProductById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const productId = req.params.id;
    const product = await productServices.getProductByIdService(productId);
    res.status(200).json(product);
  } catch (error) {
    next(error);
  }
};
