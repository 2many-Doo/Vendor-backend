import mongoose, { Schema, Document, Model } from "mongoose";

export interface ICompany extends Document {
  ownerName: string;
  email: string;
  phone: string;
  address: string;
  companyName: string;
  image?: string;
}

const CompanySchema: Schema<ICompany> = new Schema(
  {
    ownerName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    companyName: { type: String, required: true },
    image: { type: String, required: false },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

export const Company: Model<ICompany> =
  mongoose.models.Company || mongoose.model<ICompany>("Company", CompanySchema);
