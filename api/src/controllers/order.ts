import { NextFunction, Request, Response } from "express";

import orderServices from "../services/order";
import Order from "../models/Order";

export const createOrderController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const newOrder = new Order({
      userId: req.params.id,
      productList: req.body.productList,
    });
    const order = await orderServices.createOrder(newOrder);
    res.json(order);
  } catch (error) {
    next(error);
  }
};

export const getOrderListByUserId = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userId = req.params.id;
    const orderList = await orderServices.getOrderByUserId(userId);
    res.status(200).json(orderList);
  } catch (error) {
    next(error);
  }
};
