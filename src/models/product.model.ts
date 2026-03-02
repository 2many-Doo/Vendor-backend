import mongoose, { Schema, Document, Model } from "mongoose";

export interface IProduct extends Document {
  companyId: mongoose.Types.ObjectId;
  name: string;
  description: string;
  price: number;
  image: string;
  barcode: string;
  expiredDate: Date;
}
const ProductSchema: Schema<IProduct> = new Schema(
  {
    companyId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Company",
      required: true,
    },
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    barcode: { type: String, required: true },
    expiredDate: { type: Date, required: true },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

export const Product: Model<IProduct> =
  mongoose.models.Product || mongoose.model<IProduct>("Product", ProductSchema);
