import React, { useState } from "react";
import { Formik } from "formik";
import { useContext } from "react";
import UserContext from "../utils/userContext"
import Swal from "sweetalert2";

const Basic = () => {
  const { user, setLoginUser } = useContext(UserContext)

  if (user.email !== null) return <h2 className="text-2xl h-screen font-bold text-center mt-8 text-green-600">Already logged in !!</h2>

  return (
    <div className="min-h-screen max-w-sm mx-auto mt-8 p-8  bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setLoginUser({ ...user, email: values.email });
          Swal.fire({
            icon: 'success',
            title: 'Logged in successfully',
            text: `Welcome back ${values.email}`,
            showConfirmButton: false,
            timer: 1500 // Close alert after 1.5 seconds
          });
          setSubmitting(false);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-semibold">
                Enter your Email
              </label>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              />
              {errors.email && touched.email && (
                <div className="text-red-500 text-sm">{errors.email}</div>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-semibold">
                Enter Password
              </label>
              <input
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              />
              {errors.password && touched.password && (
                <div className="text-red-500 text-sm">{errors.password}</div>
              )}
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-blue-500 text-white px-4 py-2 rounded-md disabled:bg-gray-300 disabled:text-gray-600"
            >
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Basic;
