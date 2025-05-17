import { useEffect } from "react";
import TaskCard from "../components/TaskCard";
import { useTaks } from "../context/TaskContext";

const TasksPage = () => {
  const { tasks, loadTasks } = useTaks();

  useEffect(() => {
    loadTasks();
  }, []);

  function renderMain() {
    if (tasks.length === 0) return <h1>No hay tareas aún</h1>;

    return tasks.map((task) => <TaskCard task={task} key={task.id} />);
  }

  return (
    <div>
      <h1 className="text-4xl font-bold text-center mb-2">Tareas</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">{renderMain()}</div>
    </div>
  );
};

export default TasksPage;
