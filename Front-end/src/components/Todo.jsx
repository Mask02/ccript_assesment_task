import React, { useEffect } from "react";
import ChevronIcon from "../assets/icons/ChevronIcon";
import ListIcon from "../assets/icons/ListIcon";

import TodoItem from "./TodoItem";
const Todo = () => {
  const getTodos = async () => {
    await fetch("http://localhost:5000/").then((data) => {
      console.log(data);
    });
  };

  useEffect(() => {
    getTodos();
  }, []);
  return (
    <>
      <div className="todo_list_header p-2 todo-container flex items-center justify-around">
        <div className="w-[21rem]  h-8 flex items-center gap-2 text-white justify-start">
          <ListIcon />
          <span>Your todos</span>
          <ChevronIcon className="h-5 ml-auto" />
        </div>
      </div>
      <div className="min-h-18">
        <TodoItem id={""} text={""} />
      </div>
    </>
  );
};

export default Todo;
