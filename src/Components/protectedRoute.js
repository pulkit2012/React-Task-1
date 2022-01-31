import React from "react";

import { BrowserRouter as Navigate, Outlet } from "react-router-dom";
import Login from "./login";

const ProtectedRoute = ({ isAuth, loading, products }) => {
  isAuth = localStorage.getItem("logged-in-user") === null ? false : true;
  console.log(isAuth);
  return isAuth ? <Outlet /> : <Login loading={loading} products={products} />;
};

export default ProtectedRoute;
