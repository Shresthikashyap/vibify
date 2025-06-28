import { useFormik } from "formik";
import { signUpSchema } from "../../schemas/signupSchema.ts";

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirm_password: "",
};

const Registration = () => {

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values, action) => {
        console.log("Form values", values);
        action.resetForm();
      },
    });

  return (
    <div>
      <div className="grid h-screen w-full place-items-center bg-gray-100">
  <div className="w-full max-w-md p-8 bg-white rounded shadow-2xl">
    <h1 className="m-0 font-normal text-[#55311c] text-2xl mb-2">
      Welcome on Vibify
    </h1>
    <p className="my-1 mb-8 text-gray-600">Please Register Here</p>
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
                {errors.name && touched.name && (
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
                  <p className="text-[1.4rem] text-[#b22b27]">{errors.password}</p>
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
  </div>
</div>

    </div>
  )
}

export default Registration
