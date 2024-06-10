import * as yup from "yup";

// Regex expressiong for number and special character
const passwordRules = /^(?=.*[0-9])(?=.*[!@#$%^&*(),.?":{}|<>])/;

export const SignUpSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required")
    .matches(
      passwordRules,
      "Password must contain at least one number and one special character"
    ),
});
