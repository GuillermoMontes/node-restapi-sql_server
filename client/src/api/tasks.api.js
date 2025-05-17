import axios from "axios";

export const getTasksRequest = async () =>
  await axios.get("http://localhost:4003/api/tasks");

export const createTaskRequest = async (task) =>
  await axios.post("http://localhost:4003/api/tasks", task);

export const deleteTaskRequest = async (id) =>
  await axios.delete(`http://localhost:4003/api/tasks/${id}`);

export const getTaskRequest = async (id) =>
  await axios.get(`http://localhost:4003/api/tasks/${id}`);

export const updateTaskRequest = async (id, newFields) =>
  await axios.put(`http://localhost:4003/api/tasks/${id}`,newFields);
