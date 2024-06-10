import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { SignInSchema } from "../../utils/validations/auth/SignIn.schema";
import { ISignIn } from "../../api/auth/authApi.type";
import { signInService } from "../../api/auth/authService";

const SignInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SignInSchema),
  });
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<ISignIn> = async (data) => {
    signInService(data)
      .then((res) => {
        toast("Successfully logged in", { type: "success" });
        navigate("/home");
        localStorage.setItem("jwtToken", res.token);
      })
      .catch((err) => {});
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="relative mt-6">
        <label htmlFor="email">Email Address</label>
        <input
          {...register("email")}
          type="email"
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
          placeholder="Email Address"
          className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
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
          Sign in
        </button>
      </div>
    </form>
  );
};

export default SignInForm;
