import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  let nav = useNavigate();
  const logout = () => {
    localStorage.removeItem("user");
    nav("/");
  };
  useEffect(() => {
    logout();
  }, []);
  return <></>;
};

export default Logout;
