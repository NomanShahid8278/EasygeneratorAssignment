import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { SignUpSchema } from "../../utils/validations/auth/SignUp.schema";
import { ISignUp } from "../../api/auth/authApi.type";
import { signUpService } from "../../api/auth/authService";

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SignUpSchema),
  });
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<ISignUp> = async (data) => {
    signUpService(data)
      .then(() => {
        toast("Successfully signed up", { type: "success" });
        navigate("/home");
      })
      .catch((err) => {});
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="relative mt-6">
        <label htmlFor="email">Full Name</label>
        <input
          {...register("name")}
          placeholder="Full Name"
          className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
        />
        {errors.name && <span className="text-red">{errors.name.message}</span>}
      </div>
      <div className="relative mt-6">
        <label htmlFor="email">Email Address</label>
        <input
          {...register("email")}
          placeholder="Email Address"
          className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
        />
        {errors.email && (
          <span className="text-red">{errors.email.message}</span>
        )}
      </div>
      <div className="relative mt-6">
        <label htmlFor="password">Password</label>
        <input
          {...register("password")}
          type="password"
          placeholder="Password"
          className="peer peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
        />
        {errors.password && (
          <span className="text-red">{errors.password.message}</span>
        )}
      </div>
      <div className="my-6">
        <button
          type="submit"
          className="w-full rounded-md bg-black px-3 py-4 text-white focus:bg-gray-600 focus:outline-none"
        >
          Sign up
        </button>
      </div>
    </form>
  );
};

export default SignUpForm;
