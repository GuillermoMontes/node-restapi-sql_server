import { useTaks } from "../context/TaskContext";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const TaskCard = ({ task }) => {
  const { deleteTask } = useTaks();
  const navigate = useNavigate();

  return (
    <motion.div
      className="bg-zinc-600 m-2 p-3 rounded-2xl"
      initial={{
        opacity: 0,
        scale: 0.5,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{ duration: 0.5, type: "spring" }}
    >
      <h2 className=" text-2xl text-center">{task.title}</h2>
      <p className="my-8 ml-2">{task.description}</p>
      <div className="flex justify-center">
        <motion.button
          onClick={() => deleteTask(task.id)}
          className="bg-zinc-400 mx-2 rounded p-1 cursor-pointer hover:bg-zinc-500"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Borrar
        </motion.button>
        <motion.button
          onClick={() => navigate(`/edit/${task.id}`)}
          className="bg-zinc-400 mx-2 rounded p-1 cursor-pointer hover:bg-zinc-500"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Editar
        </motion.button>
      </div>
    </motion.div>
  );
};

export default TaskCard;
