import { useContext } from "react";

import { ErrorMessage, Field, Form, Formik } from "formik";

import { PageContext } from "@/context/PageContext";
import { PageType } from "@/types/pageType";
import {
  CreateListingInputSchema,
  defaultCreateListingInput,
} from "@/types/Listings";
import { createListing } from "@/lib/listing";
import { locations } from "@/types/filter";

export default function ListingForm() {
  const pageValue = useContext(PageContext);
  let pageType: PageType = "sell";
  if (pageValue) {
    pageType = pageValue.pageType;
  }
  return (
    <div className="w-4/5 max-w-1200 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold my-4">Add a new product</h1>
      <Formik
        initialValues={defaultCreateListingInput}
        validationSchema={CreateListingInputSchema}
        onSubmit={async (values, actions) => {
          console.log(values);
          await createListing(values).finally(() => {
            actions.setSubmitting(false);
          });
        }}
      >
        {({ isSubmitting, setFieldValue }) => (
          <Form className="flex flex-col space-y-3 items-center">
            <div className="flex flex-col my-2">
              <label htmlFor="title">Product Title:</label>
              <Field
                type="string"
                name="title"
                id="title"
                placeholder="Enter your Product Name"
                className="w-96 h-12 px-4 py-2 my-2 text-lg border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300"
              />
              <ErrorMessage
                name="title"
                component="div"
                className="text-red-500"
              />
            </div>
            <div className="flex flex-col my-2">
              <label htmlFor="price">Product Price:</label>
              <Field
                type="number"
                name="price"
                id="price"
                placeholder="Enter your Product Price"
                min="0"
                className="w-96 h-12 px-4 py-2 my-2 text-lg border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300"
              />
              <ErrorMessage
                name="price"
                component="div"
                className="text-red-500"
              />
            </div>
            <div className="flex flex-col my-2">
              <label htmlFor="category">Product Category:</label>
              <Field
                as="select"
                name="category"
                id="category"
                className="w-96 h-12 px-4 py-2 my-2 text-lg border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300"
              >
                <option value="Electronics">Electronics</option>
                <option value="Furniture">Furniture</option>
                <option value="Clothing">Clothing</option>
                <option value="Vehicles">Vehicles</option>
                <option value="Other">Other</option>
              </Field>
              <ErrorMessage
                name="category"
                component="div"
                className="text-red-500"
              />
            </div>
            <div className="flex flex-col my-2">
              <label htmlFor="bidTime">Bid Time (in Days):</label>
              <Field
                as="select"
                name="bidTime"
                id="bidTime"
                className="w-96 h-12 px-4 py-2 my-2 text-lg border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300"
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </Field>
              <ErrorMessage
                name="bidTime"
                component="div"
                className="text-red-500"
              />
            </div>
            <div className="flex flex-col my-2">
              <label htmlFor="bidTime">Location:</label>
              <Field
                as="select"
                name="location"
                id="location"
                className="w-96 h-12 px-4 py-2 my-2 text-lg border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300"
              >
                {locations.map((location) => (
                  <option key={location} value={location}>
                    {location}
                  </option>
                ))}
              </Field>
              <ErrorMessage
                name="location"
                component="div"
                className="text-red-500"
              />
            </div>
            <div className="flex flex-col my-2">
              <label htmlFor="title">Product Description:</label>
              <Field
                as="textarea"
                name="description"
                id="description"
                placeholder="Enter your Product Description"
                className="w-96 h-12 px-4 py-2 my-2 text-lg border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300"
              />
              <ErrorMessage
                name="description"
                component="div"
                className="text-red-500"
              />
            </div>
            <button
              type="submit"
              className="w-1/2 h-12 px-4 py-2 mt-4 bg-black text-white text-lg border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300"
              disabled={isSubmitting}
            >
              Add Product
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
