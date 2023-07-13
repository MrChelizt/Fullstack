import mongoose, { Document } from "mongoose";
import bcrypt from "bcrypt";

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

UserSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(this.password, salt);
  this.password = hashedPassword;
  next();
});

export default mongoose.model<UserDocument>("User", UserSchema);
