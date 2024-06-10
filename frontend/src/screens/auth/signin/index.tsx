import React from "react";

import SignInForm from "../../../components/signIn/SignInForm";

const SignIn = () => {
  return (
    <div className="relative mx-auto w-full max-w-md bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10 mt-24">
      <div className="w-full">
        <div className="text-center">
          <h1 className="text-3xl font-semibold text-gray-900">Sign in</h1>
          <p className="mt-2 text-gray-500">
            Sign in below to access your account
          </p>
        </div>
        <div className="mt-5">
          <SignInForm />
          <p className="text-center text-sm text-gray-500">
            Don&#x27;t have an account yet?
            <a
              href="/signUp"
              className="font-semibold text-gray-600 hover:underline focus:text-gray-800 focus:outline-none ml-1"
            >
              Sign up
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
