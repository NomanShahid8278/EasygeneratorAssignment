import { ErrorPage, Home, SignIn, SignUp } from "../screens";

const LocalRoutes = [
  {
    path: "/",
    Component: SignIn,
  },
  {
    path: "/signUp",
    Component: SignUp,
  },
  {
    path: "/home",
    Component: Home,
  },
  {
    path: "*",
    Component: ErrorPage,
  },
];

export default LocalRoutes;
