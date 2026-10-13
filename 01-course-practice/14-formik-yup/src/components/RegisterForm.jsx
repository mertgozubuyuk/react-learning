import React from "react";
import "../css/RegisterForm.css";
import { useFormik } from "formik";
import { registerFormSchemas } from "../schemas/RegisterFormSchemas";

function RegisterForm() {
  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        age: "",
        password: "",
        confirmPassword: "",
        term: false,
      },
      validationSchema: registerFormSchemas,
      onSubmit: (values, { resetForm }) => {
        console.log("Form submitted:", values);
        resetForm();
      },
    });

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email adress"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.email && errors.email && (
            <span className="error-message">{errors.email}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            name="age"
            placeholder="Enter your age"
            value={values.age}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.age && errors.age && (
            <span className="error-message">{errors.age}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.password && errors.password && (
            <span className="error-message">{errors.password}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Re-enter your password"
            value={values.confirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.confirmPassword && errors.confirmPassword && (
            <span className="error-message">{errors.confirmPassword}</span>
          )}
        </div>

        <div className="checkbox-group">
          <input
            type="checkbox"
            id="term"
            name="term"
            checked={values.term}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <label htmlFor="term">I accept the user agreement</label>
          {touched.term && errors.term && (
            <span className="error-message">{errors.term}</span>
          )}
        </div>

        <button type="submit" className="submit-button">
          Register
        </button>
      </form>
    </div>
  );
}

export default RegisterForm;
