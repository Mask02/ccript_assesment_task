import { useEffect, useState } from "react";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutes = () => {
  const [auth, setAuth] = useState(false);
  useEffect(() => {
    const isAuthenticated = localStorage.getItem("auth");
    console.log(isAuthenticated);
    setAuth(isAuthenticated);
  }, []);

  return auth ? <Outlet /> : <Navigate to="/signin" />;
};

export default PrivateRoutes;
