import { createContext, useContext, useState } from "react";
import {
  getTasksRequest,
  deleteTaskRequest,
  createTaskRequest,
  getTaskRequest,
  updateTaskRequest
} from "../api/tasks.api";


export const TaskContext = createContext();

export const useTaks = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("el useTaks debería estar dentro de un TaskContexProvider");
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
      await deleteTaskRequest(id);
      setTasks(tasks.filter((task) => task.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const createTask = async (task) => {
    try {
      const response = await createTaskRequest(task);
      console.log(response)
      // setTasks([...task,response.data])
    } catch (error) {
      console.error(error);
    }
  };

  const getTask = async (id) => {
    try {
     const response = await getTaskRequest(id)
     return response.data
    } catch (error) {
      console.error(error)
    }
  }

  const updateTask = async (id , newFieilds) => {
    try {
     const response =  await updateTaskRequest( id , newFieilds)
     console.log(response)
    } catch (error) {
      console.error(error)
    }
  }



  return (
    <TaskContext.Provider value={{ tasks, loadTasks, deleteTask, createTask , getTask , updateTask}}>
      {children}
    </TaskContext.Provider>
  );
};
