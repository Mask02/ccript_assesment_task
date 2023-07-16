import axios from "axios";

const baseUrl = "http://localhost:3000/";

// Get All Todos

const getAllTodos = async (setTodoItems) => {
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

// Delete Todo

const deleteTodo = ({ _id, getAllTodos }) => {
  console.log(_id);
  console.log(getAllTodos);
  // axios.post(`${baseUrl}/delete`, _id)
  // .then(() => {
  //   setTodoItems(getTodos());
  // });
};

export { getAllTodos, deleteTodo };
