import * as Yup from "yup";

interface signUpInputs {
  email: string;
  password: string;
  rePassword: string;
  name: string;
  phone: string;
  address: string;
}

export const defaultSignUpInputs: signUpInputs = {
  email: "",
  password: "",
  rePassword: "",
  name: "",
  phone: "",
  address: "",
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
  address: Yup.string().required("Required"),
});
