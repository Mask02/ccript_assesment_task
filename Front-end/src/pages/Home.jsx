import React, { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import PlusIcon from "../assets/icons/PlusIcon";
import profileIcon from "../assets/images/profile.jpg";
import Todo from "../components/Todo";
import axios from "axios";

export default function Home() {
  const [todoItems, setTodoItems] = useState([]);
  const [text, setText] = useState("");
  // const baseUrl = "http://localhost:3000/";
  const baseUrl = "https://todo-api-fawn.vercel.app/";

  // Add Todo
  const addTodo = () => {
    axios
      .post(`${baseUrl}add`, { text })
      .then(() => {
        toast.success("Task Added");
        setText(" ");
        getAllTodos();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Delete Todo
  const deleteTodo = (id) => {
    axios
      .post(`${baseUrl}delete`, { id })
      .then(() => {
        toast.success("Todo Deleted");
        getAllTodos();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getAllTodos();
  }, []);
  // Get All Todos

  const getAllTodos = async () => {
    await axios
      .get(`${baseUrl}`)
      .then((data) => {
        setTodoItems(data.data);
        console.log(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-16">
      <Toaster />
      <div className=" main-container flex flex-col items-center justify-between  p-2">
        <div className=" image-container border-8 border-white/50 rounded-full w-24 h-24 overflow-hidden">
          <img className=" object-cover w-full h-full" src={profileIcon} />
        </div>
        <div className=" todo-container flex items-center justify-around m-8">
          <input
            onChange={(e) => {
              setText(e.target.value);
            }}
            value={text}
            className="w-[18.5rem] m-2 h-8 outline-none"
            placeholder="Add new task"
          />
          <button className=" h-10 w-10" onClick={addTodo}>
            <PlusIcon />
          </button>
        </div>
        <Todo todoItems={todoItems} deleteTodo={deleteTodo} />
      </div>
    </div>
  );
}
