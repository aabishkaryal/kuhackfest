import * as Yup from "yup";

import {
  Location,
  ProductCategory,
  locations,
  productCategories,
} from "./filter";

export type Listing = {
  id: string;
  title: string;
  description: string;
  price: number;
  category: ProductCategory;
  images: any[];
  userId: string;
  createdAt: string;
  timeLimit: number;
  location: Location;
  phoneNumber: string;
  onWishList: boolean;
};

export type CreateListingInput = Omit<
  Listing,
  "id" | "createdAt" | "userId" | "phoneNumber" | "onWishList"
>;

export const defaultCreateListingInput: CreateListingInput = {
  title: "",
  description: "",
  price: 0,
  category: "Electronics",
  images: [],
  timeLimit: 1,
  location: "Kathmandu",
};

export const CreateListingInputSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  description: Yup.string()
    .required("Description is required")
    .min(100, "Description must be 100 characters long"),
  price: Yup.number()
    .required("Price is required")
    .positive("Price must be positive"),
  category: Yup.string()
    .required("Category is required")
    .oneOf(productCategories),
  timeLimit: Yup.number()
    .required("Time limit is required")
    .min(1, "Time limit must be at least 1 day")
    .max(5, "Time limit must be at most 5 days"),
  location: Yup.string().required("Location is required").oneOf(locations),
  images: Yup.array()
    .min(1, "Please select at least 1 image")
    .max(5, "You can select at most 5 images"),
});

export const exampleListings: Listing[] = [
  {
    id: "1",
    title: "Mobile Phone",
    description: "This is a very good phone",
    price: 1000,
    category: "Electronics",
    images: ["/100.png", "/200.svg", "/300.svg"],
    userId: "1",
    createdAt: "2021-05-01T19:20:00.000Z",
    timeLimit: 1,
    location: "Kathmandu",
    phoneNumber: "1234567890",
    onWishList: false,
  },
  {
    id: "2",
    title: "Bike",
    description: "This is a very good bike",
    price: 1000,
    category: "Vehicles",
    images: ["/100.png"],
    userId: "1",
    createdAt: "2021-05-01T19:20:00.000Z",
    timeLimit: 1,
    location: "Kathmandu",
    phoneNumber: "1234567890",
    onWishList: true,
  },
];
