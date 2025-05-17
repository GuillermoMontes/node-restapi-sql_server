import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

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

