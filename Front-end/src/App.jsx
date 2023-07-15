import React from "react";
import { Routes, Route } from "react-router-dom";

//  import pages

import Todo from "./pages/Todo";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Todo />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="*" element={<Todo />} />
      </Routes>
    </>
  );
}
export default App;
