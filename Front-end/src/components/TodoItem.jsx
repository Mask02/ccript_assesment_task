import React from "react";
import { useState } from "react";
import CheckCircleIcon from "../assets/icons/CheckCircleIcon";
import DotIcon from "../assets/icons/DotIcon";

const TodoItem = ({ text, date, deleteTodo }) => {
  const [isActive, setIsActive] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const handleClick = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="accordion-item w-[22rem] select-none  p-2">
      <div className="accordion-title border-b-2 flex justify-start h-10 items-center cursor-pointer gap-2">
        <div onClick={handleClick}>
          <CheckCircleIcon
            className={`h-5 fill-current ${
              isChecked ? " text-brown-800" : " text-blue-gray-300"
            }`}
            onClick={handleClick}
          />
        </div>

        <div>{text}</div>
        <DotIcon
          className="h-6 ml-auto"
          onClick={() => setIsActive(!isActive)}
        />
      </div>
      {isActive && (
        <div className="accordion-content">
          <div>
            <span className="complete">Completed</span>:
            {isChecked ? "Completed" : "Not Completed"}
          </div>

          <div>
            <span>Created At:{date}</span>
          </div>
          <button
            onClick={deleteTodo}
            type="button"
            className="item-button inline-block rounded   text-xs  leading-normal text-red-800"
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default TodoItem;
