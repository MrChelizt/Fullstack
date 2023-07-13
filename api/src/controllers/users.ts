import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import bcrypt from "bcrypt";

import User from "../models/Users";
import userServices from "../services/users";
import { UnauthorizedError } from "../helpers/apiError";

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
  const { email, password } = req.body;

  try {
    const userData = await userServices.findUserByEmail(req.body.email);

    const hashedPassword = userData.password;

    const isCorrectPassword = await bcrypt.compare(password, hashedPassword);

    if (!isCorrectPassword) {
      throw new UnauthorizedError();
    }

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
