import React from "react";
import { useFormik } from "formik";
import { signupSchema } from "./schemas";

const SignUp = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  };

  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues,
      validationSchema: signupSchema,
      validateOnChange: true,
      validateOnBlur: false,
      onSubmit: (values, action) => {
        console.log("🚀 ~ App ~ values", values);
        action.resetForm();
      },
    });

  return (
    <section className="fixed inset-0 flex justify-center items-center bg-[#efedee]">
      <div className="w-full bg-black/50 flex flex-col items-center justify-center transition duration-400">
        <div className="flex max-w-[60vw] w-full absolute rounded-lg overflow-hidden bg-white">
          <div className="flex-[1.5] p-[60px_30px_20px] bg-white">
            <h1 className="m-0 font-normal text-[#55311c] text-2xl">Welcome!</h1>
            <p className="mt-1 mb-8 text-gray-600">
              To the thapa technical website for programmers.
            </p>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col p-2.5 border border-gray-300 rounded mb-5 transition focus-within:border-[#8c7569]">
                <label
                  htmlFor="name"
                  className="text-[11px] uppercase font-semibold tracking-wider text-[#8c7569] transition"
                >
                  Name
                </label>
                <input
                  type="text"
                  autoComplete="off"
                  name="name"
                  id="name"
                  placeholder="Name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="outline-none border-none pt-1 text-sm placeholder:text-gray-400"
                />
                {touched.name && errors.name && (
                  <p className="text-[1.4rem] text-[#b22b27]">{errors.name}</p>
                )}
              </div>

              <div className="flex flex-col p-2.5 border border-gray-300 rounded mb-5 transition focus-within:border-[#8c7569]">
                <label
                  htmlFor="email"
                  className="text-[11px] uppercase font-semibold tracking-wider text-[#8c7569] transition"
                >
                  Email
                </label>
                <input
                  type="email"
                  autoComplete="off"
                  name="email"
                  id="email"
                  placeholder="Email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="outline-none border-none pt-1 text-sm placeholder:text-gray-400"
                />
                {errors.email && touched.email && (
                  <p className="text-[1.4rem] text-[#b22b27]">{errors.email}</p>
                )}
              </div>

              <div className="flex flex-col p-2.5 border border-gray-300 rounded mb-5 transition focus-within:border-[#8c7569]">
                <label
                  htmlFor="password"
                  className="text-[11px] uppercase font-semibold tracking-wider text-[#8c7569] transition"
                >
                  Password
                </label>
                <input
                  type="password"
                  autoComplete="off"
                  name="password"
                  id="password"
                  placeholder="Password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="outline-none border-none pt-1 text-sm placeholder:text-gray-400"
                />
                {errors.password && touched.password && (
                  <p className="text-[1.4rem] text-[#b22b27]">
                    {errors.password}
                  </p>
                )}
              </div>

              <div className="flex flex-col p-2.5 border border-gray-300 rounded mb-5 transition focus-within:border-[#8c7569]">
                <label
                  htmlFor="confirm_password"
                  className="text-[11px] uppercase font-semibold tracking-wider text-[#8c7569] transition"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  autoComplete="off"
                  name="confirm_password"
                  id="confirm_password"
                  placeholder="Confirm Password"
                  value={values.confirm_password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="outline-none border-none pt-1 text-sm placeholder:text-gray-400"
                />
                {errors.confirm_password && touched.confirm_password && (
                  <p className="text-[1.4rem] text-[#b22b27]">
                    {errors.confirm_password}
                  </p>
                )}
              </div>

              <div className="flex justify-between items-center">
                <a href="#" className="text-[14px] text-black/60">
                  Want to register using Gmail?
                </a>
                <button
                  type="submit"
                  className="py-3 px-8 uppercase border-0 text-white rounded bg-[#8c7569] hover:bg-[#55311c] transition"
                >
                  Registration
                </button>
              </div>
            </form>
            <p className="mt-16 text-[14px] text-center">
              Already have an account?{" "}
              <a href="#" className="text-[#8c7569]">
                Sign In now
              </a>
            </p>
          </div>
          <div className="flex-[2] text-[0] overflow-hidden hidden md:block">
            <img
              className="w-full h-full object-cover transition duration-[1.2s]"
              src="https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=dfd2ec5a01006fd8c4d7592a381d3776&auto=format&fit=crop&w=1000&q=80"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
