import { useEffect, useState } from "react";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";
import api from "./api"; // Importing the API module

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const todosData = await api.getTodos();
        setTodos(todosData);
      } catch (error) {
        console.error("Failed to fetch todos:", error);
      }
    };
    fetchTodos();
  }, []);

  const addTodo = async (text) => {
    const newTodo = { id: Math.round(Math.random() * 1000), text: text };
    try {
      await api.addTodo(newTodo);
      setTodos((prevTodos) => [...prevTodos, newTodo]);
    } catch (error) {
      console.error("Failed to add todo:", error);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await api.deleteTodo(id);
      setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    } catch (error) {
      console.error("Failed to delete todo:", error);
    }
  };

  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold my-3">Todo List</h1>
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
};

export default App;

