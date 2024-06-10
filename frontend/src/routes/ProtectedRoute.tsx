import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface IProp {
  Component: React.ComponentType;
  isProtected?: boolean;
}
const ProtectedRoute = ({ Component, isProtected }: IProp) => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("jwtToken");
    if (!token && isProtected) {
      navigate("/");
    }
  }, []);
  return (
    <>
      <Component />
    </>
  );
};

export default ProtectedRoute;
