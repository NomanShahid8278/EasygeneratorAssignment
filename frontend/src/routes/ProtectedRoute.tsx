import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface IProp {
  Component: React.ComponentType;
}
const ProtectedRoute = ({ Component }: IProp) => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("jwtToken");
    if (!token) {
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
