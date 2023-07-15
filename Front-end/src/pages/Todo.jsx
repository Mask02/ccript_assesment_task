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
        <div className=" image-container border-8 border-white/60 rounded-full w-24 h-24 overflow-hidden">
          <image
            className=" object-cover w-full h-full"
            src={profileIcon}
          ></image>
        </div>
        <div className=" todo-container m-8">
          <form action={addTodo}>
            <input className=" m-2 w-3/4 h-8" placeholder="Add new task" />
            <button> Add</button>
          </form>
        </div>
      </div>
    </div>
  );
}
