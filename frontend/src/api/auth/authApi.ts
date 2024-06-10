import axiosInstance from "..";

import { ISignIn, ISignUp } from "./authApi.type";

export const signUp = (user: ISignUp) =>
  axiosInstance.post("/auth/signup", user);
export const signIn = (user: ISignIn) =>
  axiosInstance.post("/auth/signin", user);
