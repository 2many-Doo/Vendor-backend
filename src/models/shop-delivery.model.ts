import mongoose, { Schema, Document, Model } from "mongoose";

export type TransactionType =
  | "CASH"
  | "BANK_TRANSFER"
  | "CREDIT_CARD"
  | "NOT_PAYMENT";

interface IShopDelivery extends Document {
  companyId: mongoose.Types.ObjectId;
  shopId: mongoose.Types.ObjectId;
  deliveryPersonId: mongoose.Types.ObjectId;
  products: {
    productId: mongoose.Types.ObjectId;
    quantity: number;
    price: number;
  }[];
  barcode: string;
  transactionType: TransactionType;
  totalPrice: number;
  createdAt: Date;
  updatedAt: Date;
}

const ShopDeliverySchema = new Schema<IShopDelivery>(
  {
    companyId: {
      type: Schema.Types.ObjectId,
      ref: "Company",
      required: true,
    },

    shopId: {
      type: Schema.Types.ObjectId,
      ref: "Shop",
      required: true,
    },

    deliveryPersonId: {
      type: Schema.Types.ObjectId,
      ref: "DeliveryPerson",
      required: true,
    },

    transactionType: {
      type: String,
      enum: ["CASH", "BANK_TRANSFER", "CREDIT_CARD", "NOT_PAYMENT"],
      required: true,
    },

    products: [
      {
        productId: {
          type: Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
        price: {
          type: Number,
          required: true,
        },
        _id: false,
      },
    ],

    barcode: {
      type: String,
      required: true,
    },

    totalPrice: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export const ShopDelivery: Model<IShopDelivery> =
  mongoose.models.ShopDelivery ||
  mongoose.model<IShopDelivery>("ShopDelivery", ShopDeliverySchema);
