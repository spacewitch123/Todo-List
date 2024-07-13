const axios = require("axios").default;

const api = {
  getTodos: async () => {
    try {
      const response = await axios.get("http://localhost:8000/todos");
      return response.data;
    } catch (error) {
      console.error("Error fetching todos:", error);
      throw error;
    }
  },

  addTodo: async (newTodo) => {
    try {
      const response = await axios.post("http://localhost:8000/todos", newTodo);
      return response.data;
    } catch (error) {
      console.error("Error adding todo:", error);
      throw error;
    }
  },

  deleteTodo: async (id) => {
    try {
      await axios.delete(`http://localhost:8000/todos/${id}`);
    } catch (error) {
      console.error("Error deleting todo:", error);
      throw error;
    }
  },
};

export default api;
