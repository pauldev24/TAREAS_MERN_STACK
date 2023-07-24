import axios from "axios";

export const getTasksRequest = async () =>
  await axios.get("http://localhost:4000/tasks");

export const createTasksRequest = async (task) =>
await axios.post("http://localhost:4000/tasks", task);
  //await axios.post("https://taskpaul.onrender.com/tasks", task);

export const deleteTasksRequest = async (id) =>
  await axios.delete(`http://localhost:4000/tasks/${id}`);

export const getTaskRequest = async (id) =>
  await axios.get(`http://localhost:4000/tasks/${id}`);

export const updateTaskRequest = async (id, newTask) =>
  await axios.put(`http://localhost:4000tasks/${id}`, newTask);

export const toggleTaskDoneRequest = async (id,done) =>
  await axios.put(`http://localhost:4000/tasks/${id}`, {done});
