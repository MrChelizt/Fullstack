import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

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

dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET as string;

export const logInWithPassword = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userData = await userServices.findUserByEmail(req.body.email);
    if (!userData) {
      res.status(403).json({ message: "user don't have account yet" });
      return;
    }
    res.json(userData);
    const token = jwt.sign(
      { email: req.body.email, _id: userData._id },
      JWT_SECRET,
      { expiresIn: "1h" }
    );
    res.json({ userData, token });
  } catch (error) {
    next(error);
  }
};
