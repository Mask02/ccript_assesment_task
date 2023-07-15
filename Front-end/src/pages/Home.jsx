import React from "react";
import PlusIcon from "../assets/icons/PlusIcon";

import profileIcon from "../assets/images/profile.jpg";

import Todo from "../components/Todo";
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
        <div className=" todo-container flex items-center justify-around m-8">
          <input
            className="w-72 m-2 h-8 outline-none"
            placeholder="Add new task"
          />
          <button className=" h-10 w-10" onClick={addTodo}>
            <PlusIcon />
          </button>
        </div>
        <Todo />
      </div>
    </div>
  );
}
