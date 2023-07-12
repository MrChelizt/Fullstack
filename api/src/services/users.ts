import { NotFoundError } from "../helpers/apiError";
import User, { UserDocument } from "../models/Users";

const createUserService = async (user: UserDocument): Promise<UserDocument> => {
  return await user.save();
};

const findUserByEmail = async (userEmail: string): Promise<UserDocument> => {
  const foundUser = await User.findOne({ email: userEmail });
  if (!foundUser) {
    throw new NotFoundError(`User with email ${userEmail} not found`);
  }
  return foundUser;
};

export default { createUserService, findUserByEmail };
