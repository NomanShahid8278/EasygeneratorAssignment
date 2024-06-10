import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    navigate("/");
    localStorage.removeItem("jwtToken");
  };

  return (
    <div className=" container mx-auto p-8 overflow-hidden md:rounded-lg md:p-10 lg:p-12 flex justify-between items-center">
      <h1 className="font-serif text-3xl font-medium">
        Welcome to the Application
      </h1>
      <div className="flex items-center w-full mt-6 gap-x-3 shrink-0 sm:w-auto">
        <button
          onClick={handleSignOut}
          className="w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Home;
