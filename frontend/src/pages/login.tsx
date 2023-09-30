import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";

import { ErrorMessage, Field, Form, Formik } from "formik";

import { UserContext } from "@/context/UserContext";
import AuthBanner from "@/components/AuthBanner";
import { defaultLoginInputs, loginInputsSchema } from "@/types/loginInputs";
import { login } from "@/lib/auth";

export default function Login() {
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
          initialValues={defaultLoginInputs}
          validationSchema={loginInputsSchema}
          onSubmit={async (values, actions) => {
            console.log("submit");
            await login(values.email, values.password).finally(() =>
              actions.setSubmitting(false)
            );
          }}
        >
          {({ isSubmitting }) => {
            return (
              <Form className="flex flex-col space-y-4">
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
                <button
                  type="submit"
                  className="h-12 px-4 py-2 mt-4 bg-black text-white text-lg border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300"
                  disabled={isSubmitting}
                >
                  Log In
                </button>
              </Form>
            );
          }}
        </Formik>
        <hr className="w-96 mt-4 border-gray-700" />
        <p className="mt-4 text-xs text-gray-500">{"Don't have an account?"}</p>
        <Link href="/signup">
          <button className="h-12 px-4 py-2 mt-4 bg-black text-white text-lg border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300">
            Sign Up
          </button>
        </Link>
      </div>
    </div>
  );
}
