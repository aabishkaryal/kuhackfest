import * as Yup from "yup";

interface signUpInputs {
  email: string;
  password: string;
  rePassword: string;
  name: string;
  phone: string;
  location: string;
}

export const defaultSignUpInputs: signUpInputs = {
  email: "",
  password: "",
  rePassword: "",
  name: "",
  phone: "",
  location: "",
};

export const signUpInputSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid Email Address").required("Required"),
  password: Yup.string()
    .required("Required")
    .min(8, "Password must be 8 characters long"),
  rePassword: Yup.string()
    .required("Required")
    .oneOf([Yup.ref("password")], "Passwords must match"),
  phone: Yup.string().required("Required").length(10, "Invalid Phone Number"),
  location: Yup.string().required("Required"),
});
