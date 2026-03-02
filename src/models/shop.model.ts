import mongoose, { Schema, Document, Model } from "mongoose";

export interface IShop extends Document {
  name: string;
  address: string;
  phone: string;
  email: string;
}

const ShopSchema: Schema<IShop> = new Schema(
  {
    name: { type: String, required: true },
    address: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

export const Shop: Model<IShop> =
  mongoose.models.Shop || mongoose.model<IShop>("Shop", ShopSchema);
