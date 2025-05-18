import axios from "axios";

const API_URL = "https://miapp-backend-brazil-gtbuc8bsdpf8bxhj.brazilsouth-01.azurewebsites.net";

export const getTasksRequest = async () =>
  await axios.get(`${API_URL}/api/tasks`);

export const createTaskRequest = async (task) =>
  await axios.post(`${API_URL}/api/tasks`, task);

export const deleteTaskRequest = async (id) =>
  await axios.delete(`${API_URL}/api/tasks/${id}`);

export const getTaskRequest = async (id) =>
  await axios.get(`${API_URL}/api/tasks/${id}`);

export const updateTaskRequest = async (id, newFields) =>
  await axios.put(`${API_URL}/api/tasks/${id}`, newFields);

