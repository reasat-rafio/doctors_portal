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
