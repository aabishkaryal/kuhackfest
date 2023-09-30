import { productCategory } from "./filter";

export type Listing = {
  id: string;
  title: string;
  description: string;
  price: number;
  category: productCategory;
  images: string[];
  userId: string;
  createdAt: string;
  timeLimit: string;
  location: string;
  phoneNumber: string;
};
