import mongoose, { Schema, Document, Model } from "mongoose";

export interface IDeliveryPerson extends Document {
  companyId: mongoose.Types.ObjectId;
  name: string;
  email: string;
  phone: string;
  address: string;
  image?: string;
}
const DeliveryPersonSchema: Schema<IDeliveryPerson> = new Schema(
  {
    companyId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Company",
      required: true,
    },
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    image: { type: String, required: false },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

export const DeliveryPerson: Model<IDeliveryPerson> =
  mongoose.models.DeliveryPerson ||
  mongoose.model<IDeliveryPerson>("DeliveryPerson", DeliveryPersonSchema);
