import { useEffect, useState } from "react";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutes = () => {
  const getAuth = () => {
    const user = localStorage.getItem("user");
    if (user) {
      return true;
    } else {
      return false;
    }
  };
  useEffect(() => {
    getAuth();
  }, []);
  let auth = getAuth();
  return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
