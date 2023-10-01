import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";

import { ErrorMessage, Field, Form, Formik } from "formik";

import { UserContext } from "@/context/UserContext";
import AuthBanner from "@/components/AuthBanner";
import { defaultSignUpInputs, signUpInputSchema } from "@/types/signupInputs";
import { signup } from "@/lib/auth";

export default function Signup() {
  const router = useRouter();

  const userState = useContext(UserContext);
  useEffect(() => {
    if (userState?.user) router.push("/dashboard");
  });

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen">
      <div className="flex flex-col justify-center shadow-lg items-center p-4 rounded-2xl">
        <AuthBanner />
        <Formik
          initialValues={defaultSignUpInputs}
          validationSchema={signUpInputSchema}
          onSubmit={async (values, actions) => {
            console.log("submit");
            await signup(
              values.email,
              values.password,
              values.name,
              values.phone,
              values.address
            ).finally(() => actions.setSubmitting(false));
          }}
        >
          {({ isSubmitting }) => {
            return (
              <Form className="flex flex-col space-y-4">
                <div className="flex flex-col mt-8">
                  <Field
                    type="name"
                    name="name"
                    id="name"
                    placeholder="Enter your name"
                    className="w-96 h-12 px-4 py-2 my-2 text-lg border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-red-500"
                  />
                </div>
                <div className="flex flex-col mt-8">
                  <Field
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                    className="w-96 h-12 px-4 py-2 my-2 text-lg border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500"
                  />
                </div>
                <div className="flex flex-col">
                  <Field
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter your password"
                    className="w-96 h-12 px-4 py-2 my-2 text-lg border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-500"
                  />
                </div>
                <div className="flex flex-col">
                  <Field
                    type="password"
                    name="rePassword"
                    id="rePassword"
                    placeholder="Re-enter your password"
                    className="w-96 h-12 px-4 py-2 my-2 text-lg border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300"
                  />
                  <ErrorMessage
                    name="rePassword"
                    component="div"
                    className="text-red-500"
                  />
                </div>
                <div className="flex flex-col">
                  <Field
                    type="phone"
                    name="phone"
                    id="phone"
                    placeholder="Enter your phone"
                    className="w-96 h-12 px-4 py-2 my-2 text-lg border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300"
                  />
                  <ErrorMessage
                    name="phone"
                    component="div"
                    className="text-red-500"
                  />
                </div>
                <div className="flex flex-col">
                  <Field
                    type="address"
                    name="address"
                    id="address"
                    placeholder="Enter your address"
                    className="w-96 h-12 px-4 py-2 my-2 text-lg border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300"
                  />
                  <ErrorMessage
                    name="address"
                    component="div"
                    className="text-red-500"
                  />
                </div>
                <button
                  type="submit"
                  className="h-12 px-4 py-2 mt-4 bg-black text-white text-lg border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300"
                  disabled={isSubmitting}
                >
                  Sign Up
                </button>
              </Form>
            );
          }}
        </Formik>
        <hr className="w-96 mt-4 border-gray-700" />
        <p className="mt-4 text-xs text-gray-500">Already have an account?</p>
        <Link href="/login">
          <button className="h-12 px-4 py-2 mt-4 bg-black text-white text-lg border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
}
