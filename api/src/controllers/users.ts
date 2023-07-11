import { NextFunction, Request, Response } from "express";

import User from "../models/Users";
import userServices from "../services/users";

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email, password } = req.body;

  const userInformation = new User({
    email: email,
    password: password,
  });

  try {
    const user = await userServices.createUserService(userInformation);
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

export const getAllUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userList = await userServices.getUserList();
    res.status(200).json(userList);
  } catch (error) {
    next(error);
  }
};
