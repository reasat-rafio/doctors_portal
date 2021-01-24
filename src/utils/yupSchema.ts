import * as yup from "yup";

export const LoginSchema = yup.object().shape({
   email: yup
      .string()
      .email("Please enter a correct email")
      .required("Email is required"),
   password: yup
      .string()
      .min(4, "Password must be longer than 4 character")
      .required("This field is required"),
});

export const RegisterSchema = yup.object().shape({
   name: yup
      .string()
      .min(2, "User name must be longer than 4 character")
      .max(15, "User name must be less than 15 character")
      .required("User name is required"),
   email: yup
      .string()
      .email("Please enter a correct email")
      .required("Email is required"),
   password: yup
      .string()
      .min(4, "Password must be longer than 4 character")
      .required("This field is required"),
});
