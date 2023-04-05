import { Form, Formik } from "formik";
import { useTasks } from "../context/TaskContext";
useTasks;
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function TasksForm() {
  const { createTask, getTask, updateTask } = useTasks();
  const param = useParams();
  const navigate = useNavigate();
  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  useEffect(() => {
    const loadTask = async () => {
      if (param.id) {
        const task = await getTask(param.id);
        setTask({
          title: task.title,
          description: task.description,
        });
      }
    };
    loadTask();
  }, []);

  return (
    <div className="">
      <Formik
        initialValues={task}
        enableReinitialize={true} //Para reiniciar values
        onSubmit={async (valores, acciones) => {
          console.log(valores);
          if (param.id) {
            await updateTask(param.id, valores);
            navigate("/");
          } else {
            await createTask(valores);
            navigate("/");
          }
          setTask({
            title: "",
            description: "",
          });
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <Form
            className="bg-slate-300 max-w-sm rounded-md p-4 mx-auto mt-10"
            onSubmit={handleSubmit}
          >
            <h1 className="text-xl font-bold upp
             text-center">{param.id ? "Editar Tarea " + param.id : "Crear Tarea"}</h1>
            <label className="block">Titulo</label>
            <input
              className="px-2 py-1 rounded-sm w-full"
              type="text"
              name="title"
              onChange={handleChange}
              value={values.title}
            />

            <label className="block">Descripcion</label>
            <textarea
              name="description"
              id=""
              className="px-2 py-1 rounded-sm w-full"
              rows="3"
              placeholder="Escribe una descripcion"
              onChange={handleChange}
              value={values.description}
            ></textarea>

            <button className="block bg-indigo-500 px-2 py-1 text-white w-full rounded-md" type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Guardando..." : "Guardar"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default TasksForm;
