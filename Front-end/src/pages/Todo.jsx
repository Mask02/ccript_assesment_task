import React from "react";
import profileIcon from "../assets/images/profile.jpg";
// import "./index.css";
export default function Home() {
  const addTodo = () => {
    console.log("Hi");
  };
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-16">
      <div className=" main-container flex flex-col items-center justify-between  p-2">
        <div className=" image-container border-8 border-white/50 rounded-full w-24 h-24 overflow-hidden">
          <img className=" object-cover w-full h-full" src={profileIcon} />
        </div>
        <div className=" todo-container flex  m-8">
          <input className=" m-2 h-8" placeholder="Add new task" />
          <button className=" h-10 w-12" onClick={addTodo}>
            {" "}
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
