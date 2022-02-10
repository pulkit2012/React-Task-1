import React from "react";

import { Outlet } from "react-router-dom";
import Login from "../Components/Login/login";

const ProtectedRoute = ({ isAuth, loading, products }) => {
  isAuth = localStorage.getItem("logged-in-user") === null ? false : true;
  return isAuth ? <Outlet /> : <Login loading={loading} products={products} />;
};

export default ProtectedRoute;
