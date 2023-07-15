import React from "react";

const TodoItem = ({ id, text }) => {
  return (
    <>
      <div className="todo_list p-2 todo-container flex items-center justify-around">
        <div className="w-[21rem]  h-8 flex items-center gap-2 text-white justify-start">
          <span>Your todos</span>
        </div>
      </div>
    </>
  );
};

export default TodoItem;
