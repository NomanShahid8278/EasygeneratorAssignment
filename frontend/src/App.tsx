import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import LocalRoutes from "./routes/routes";
import ProtectedRoute from "./routes/ProtectedRoute";

interface IRoute {
  path: string;
  Component: React.ComponentType;
  isProtected?: boolean;
}

function App() {
  return (
    <>
      <Router>
        <Routes>
          {LocalRoutes.map((item: IRoute) => {
            const { path, Component, isProtected } = item;
            return (
              <Route
                key={path}
                path={path}
                element={
                  <ProtectedRoute
                    Component={Component}
                    isProtected={isProtected}
                  />
                }
              />
            );
          })}
        </Routes>
      </Router>
      <ToastContainer autoClose={3000} hideProgressBar closeOnClick />
    </>
  );
}

export default App;
