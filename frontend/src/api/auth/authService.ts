import { toast } from "react-toastify";

import { signUp, signIn } from "./authApi";
import { ISignIn, ISignUp } from "./authApi.type";

export const signUpService = async (user: ISignUp) => {
  try {
    const response = await signUp(user);
    return response.data;
  } catch (error: any) {
    toast(error.message, { type: "error" });
    throw error;
  }
};

export const signInService = async (user: ISignIn) => {
  try {
    const response = await signIn(user);
    return response.data;
  } catch (error: any) {
    toast(error.message, { type: "error" });
    throw error;
  }
};
