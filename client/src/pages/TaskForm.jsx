import { Formik, Form } from "formik";
import { useTaks } from "../context/TaskContext";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const TaskForm = () => {
  const { createTask, getTask, updateTask } = useTaks();
  const [task, setTask] = useState({
    title: "",
    description: "",
  });
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const loadTask = async () => {
      if (params.id) {
        const task = await getTask(params.id);
        setTask({
          title: task.title,
          description: task.description,
        });
      }
    };
    loadTask();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-4">
        {params.id ? "Editar tarea" : "Nueva Tarea"}
      </h1>
      <Formik
        initialValues={task}
        enableReinitialize={true}
        onSubmit={async (values, actions) => {
          if (params.id) {
            await updateTask(params.id, values);
            navigate("/");
          } else {
            await createTask(values);
            navigate("/");
          }

          setTask({
            title: "",
            description: "",
          });
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <Form onSubmit={handleSubmit}>
            <motion.div
              className="flex"
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
                scale: 1.1,
                transition: {
                  duration: 0.5,
                },
              }}
            >
              <div className="grid grid-cols-1 w-80 mx-auto">
                <label className="font-bold ml-2 my-2">Título</label>
                <input
                  type="text"
                  name="title"
                  placeholder="Escribe un titulo"
                  onChange={handleChange}
                  value={values.title}
                  className="bg-zinc-600 mx-2 px-2 py-1 rounded"
                />

                <label className="font-bold ml-2 my-2 ">Descripción</label>
                <textarea
                  name="description"
                  rows="3"
                  placeholder="Escribre una descripcion..."
                  onChange={handleChange}
                  value={values.description}
                  className="bg-zinc-600 mx-2 px-2 rounded py-1"
                ></textarea>
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-zinc-400 mx-2 rounded p-1 cursor-pointer hover:bg-zinc-500 my-4"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {isSubmitting ? "Guardando.." : "Guardar"}
                </motion.button>
              </div>
            </motion.div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default TaskForm;
