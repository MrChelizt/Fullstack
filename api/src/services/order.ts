import { NotFoundError } from "../helpers/apiError";
import Order, { OrderDocument } from "../models/Order";

const createOrder = async (order: OrderDocument): Promise<OrderDocument> => {
  return await order.save();
};

const getOrderByUserId = async (userId: string): Promise<OrderDocument[]> => {
  const foundOrders = await Order.find({ userId: userId }).populate({
    path: "userId",
  });
  if (!foundOrders) {
    throw new NotFoundError(`Order belongs to user id: ${userId} not found`);
  }
  return foundOrders;
};

export default { createOrder, getOrderByUserId };
