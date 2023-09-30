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

export const exampleListings: Listing[] = [
  {
    id: "1",
    title: "Mobile Phone",
    description: "This is a very good phone",
    price: 1000,
    category: productCategory.Electronics,
    images: ["/100.png"],
    userId: "1",
    createdAt: "2021-05-01T19:20:00.000Z",
    timeLimit: "2021-05-01T19:20:00.000Z",
    location: "Kathmandu",
    phoneNumber: "1234567890",
  },
  {
    id: "2",
    title: "Bike",
    description: "This is a very good bike",
    price: 1000,
    category: productCategory.Vehicles,
    images: ["/100.png"],
    userId: "1",
    createdAt: "2021-05-01T19:20:00.000Z",
    timeLimit: "2021-05-01T19:20:00.000Z",
    location: "Kathmandu",
    phoneNumber: "1234567890",
  },
];
