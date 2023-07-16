import React, { useEffect, useState } from "react";
import ChevronIcon from "../assets/icons/ChevronIcon";
import ListIcon from "../assets/icons/ListIcon";
import axios from "axios";
import TodoItem from "./TodoItem";
// TODO
const Todo = ({ todoItems, deleteTodo }) => {
  return (
    <>
      <div className="todo_list_header p-2 todo-container flex items-center justify-around">
        <div className="w-[21rem]  h-8 flex items-center gap-2 text-white justify-start">
          <ListIcon />
          <span>Your todos</span>
          <ChevronIcon className="h-5 ml-auto" />
        </div>
      </div>
      {todoItems.length > 0 ? (
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
                id={item._id}
                deleteTodo={deleteTodo}
              />
            );
          })}
        </div>
      ) : (
        <div
          className="todo_list_container w-[22rem]"
          style={{ justifyContent: "center" }}
        >
          <p className=" text-center">No task today</p>
        </div>
      )}
    </>
  );
};

export default Todo;
