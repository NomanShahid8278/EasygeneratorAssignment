import React from "react";

import SignUpForm from "../../../components/signUp/SignUpForm";

const SignUp = () => {
  return (
    <div className="relative mx-auto w-full max-w-md bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10 mt-24">
      <div className="w-full">
        <div className="text-center">
          <h1 className="text-3xl font-semibold text-gray-900">Sign up</h1>
          <p className="mt-2 text-gray-500">Sign up to use application</p>
        </div>
        <div className="mt-5">
          <SignUpForm />
          <p className="text-center text-sm text-gray-500">
            Do you have an account?
            <a
              href="/"
              className="font-semibold text-gray-600 hover:underline focus:text-gray-800 focus:outline-none ml-1"
            >
              Sign in
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
