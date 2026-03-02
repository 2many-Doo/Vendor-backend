import mongoose, { Schema, Document, Model } from "mongoose";

export interface IProductReturn extends Document {
  companyId: mongoose.Types.ObjectId;
  productId: mongoose.Types.ObjectId;
  returnPersonId: mongoose.Types.ObjectId;
  shopId: mongoose.Types.ObjectId;
  quantity: number;
  totalPrice: number;
}

const ProductReturnSchema: Schema<IProductReturn> = new Schema(
  {
    companyId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Company",
      required: true,
    },
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    returnPersonId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ReturnPerson",
      required: true,
    },
    shopId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Shop",
      required: true,
    },
    quantity: { type: Number, required: true },
    totalPrice: { type: Number, required: true },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

export const ProductReturn: Model<IProductReturn> =
  mongoose.models.ProductReturn ||
  mongoose.model<IProductReturn>("ProductReturn", ProductReturnSchema);
