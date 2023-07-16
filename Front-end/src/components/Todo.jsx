import React, { useEffect, useState } from "react";
import ChevronIcon from "../assets/icons/ChevronIcon";
import ListIcon from "../assets/icons/ListIcon";

import TodoItem from "./TodoItem";

import { getAllTodos, deleteTodo } from "../api/handleApi";

// TODO
const Todo = () => {
  const [todoItems, setTodoItems] = useState([]);

  useEffect(() => {
    getAllTodos(setTodoItems);
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
      <div className="todo_list_container">
        {todoItems.map((item) => {
          const formattedDate = new Intl.DateTimeFormat("en-US", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            timeZone: "UTC",
          }).format(new Date(item?.todCreatedAt));
          return (
            <TodoItem
              key={item?._id}
              text={item?.text}
              date={formattedDate}
              deleteTodo={() => {
                deleteTodo(item?._id, getAllTodos);
              }}
            />
          );
        })}
      </div>
    </>
  );
};

export default Todo;
