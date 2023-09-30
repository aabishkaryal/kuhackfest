import * as Yup from "yup";

interface LoginInputs {
  email: string;
  password: string;
}

export const defaultInputs: LoginInputs = {
  email: "",
  password: "",
};

export const loginInputsSchema = Yup.object().shape({
  email: Yup.string().email("Invalid Email Address").required("Required"),
  password: Yup.string()
    .required("Required")
    .min(8, "Password must be 8 characters long"),
});
