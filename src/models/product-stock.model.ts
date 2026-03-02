import mongoose, { Schema, Document, Model } from "mongoose";

export interface IProductStock extends Document {
  companyId: mongoose.Types.ObjectId;
  productId: mongoose.Types.ObjectId;
  quantity: number;
  totalPrice: number;
}

const ProductStockSchema: Schema<IProductStock> = new Schema(
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
    quantity: { type: Number, required: true },
    totalPrice: { type: Number, required: true },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

export const ProductStock: Model<IProductStock> =
  mongoose.models.ProductStock ||
  mongoose.model<IProductStock>("ProductStock", ProductStockSchema);
