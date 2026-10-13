import * as yup from "yup";

export const registerFormSchemas = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email adress")
    .required("This field cannot be left blank"),

  age: yup
    .number()
    .typeError("Please enter a valid number")
    .positive("Please enter a positive value")
    .integer("Please enter a integer value")
    .required("This field cannot be left blank"),

  password: yup.string().required("This field cannot be left blank"),

  confirmPassword: yup
    .string()
    .required("This field cannot be left blank")
    .oneOf([yup.ref("password")], "Password confirmation is required"),

  term: yup.boolean().oneOf([true], "Please check the box"),
});
