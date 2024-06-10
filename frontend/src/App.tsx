import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import LocalRoutes from "./utils/routes";

interface IRoute {
  path: string;
  Component: React.ComponentType;
}

function App() {
  return (
    <>
      <Router>
        <Routes>
          {LocalRoutes.map((item: IRoute) => {
            const { path, Component } = item;
            return <Route key={path} path={path} element={<Component />} />;
          })}
        </Routes>
      </Router>
      <ToastContainer autoClose={3000} hideProgressBar closeOnClick />
    </>
  );
}

export default App;
