import { model, Schema } from "mongoose";

export interface IContact {
  ownerId: string;
  sharedWith: string[];
  firstName: string;
  lastName: string;
  contactNumber: string;
  email: string;
  profilePhoto?: string;
}

const contactSchema = new Schema<IContact>({
  ownerId: {
    type: String,
    required: true,
  },
  sharedWith: {
    type: [String],
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  contactNumber: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  profilePhoto: {
    type: String,
  },
});

export const Contact = model<IContact>("Contact", contactSchema);
