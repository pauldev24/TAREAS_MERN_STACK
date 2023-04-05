import { createContext, useContext, useState } from "react";
import {
  getTasksRequest,
  deleteTasksRequest,
  createTasksRequest,
  getTaskRequest,
  updateTaskRequest,
  toggleTaskDoneRequest,
} from "../api/tasks.api";

export const TaskContext = createContext();

export const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("El task debe estar en una provider");
  }
  return context;
};

export const TaskContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  async function loadTasks() {
    const response = await getTasksRequest();
    setTasks(response.data);
  }

  const deleteTask = async (id) => {
    try {
      const responde = await deleteTasksRequest(id);
      setTasks(tasks.filter((task) => task.id != id));
    } catch (error) {
      console.log(error);
    }
  };

  const createTask = async (valores) => {
    try {
      const response = await createTasksRequest(valores);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  const getTask = async (id) => {
    try {
      const response = await getTaskRequest(id);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const updateTask = async (id, newTask) => {
    try {
      const response = await updateTaskRequest(id, newTask);
    } catch (error) {
      console.log(error);
    }
  };

  const toggleTaskDone = async (id) => {
    try {
      const taskFound = tasks.find((task) => task.id == id);
      await toggleTaskDoneRequest(id, taskFound.done == 0 ? true : false);
      setTasks(
        tasks.map((task) =>
          task.id == id ? { ...task, done: !task.done } : task
        )
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        loadTasks,
        deleteTask,
        createTask,
        getTask,
        updateTask,
        toggleTaskDone,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
