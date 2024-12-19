import { model, Schema } from "mongoose";

export interface IUser {
  email: string;
  password: string;
  isApproved: boolean;
  createdAt?: Date;
  id?: string;
}

const userSchema = new Schema<IUser>({
  isApproved: {
    type: Boolean,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const User = model<IUser>("User", userSchema);
