import axios from "axios";

export const getTasksRequest = async () =>
  await axios.get("https://taskpaul.onrender.com/tasks");

export const createTasksRequest = async (task) =>
  await axios.post("https://taskpaul.onrender.com/tasks", task);

export const deleteTasksRequest = async (id) =>
  await axios.delete(`https://taskpaul.onrender.com/tasks/${id}`);

export const getTaskRequest = async (id) =>
  await axios.get(`https://taskpaul.onrender.com/tasks/${id}`);

export const updateTaskRequest = async (id, newTask) =>
  await axios.put(`https://taskpaul.onrender.com/tasks/${id}`, newTask);

export const toggleTaskDoneRequest = async (id,done) =>
  await axios.put(`https://taskpaul.onrender.com/tasks/${id}`, {done});
