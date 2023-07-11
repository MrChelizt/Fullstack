import mongoose, { Document } from "mongoose";

export type UserDocument = Document & {
  email: string;
  password: string;
};

export const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

export default mongoose.model<UserDocument>("User", UserSchema);
