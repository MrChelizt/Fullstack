import { NotFoundError } from "../helpers/apiError";
import User, { UserDocument } from "../models/Users";

const createUserService = async (user: UserDocument): Promise<UserDocument> => {
  return await user.save();
};

const getUserList = async (): Promise<UserDocument[]> => {
  return await User.find();
};

export default { createUserService, getUserList };
