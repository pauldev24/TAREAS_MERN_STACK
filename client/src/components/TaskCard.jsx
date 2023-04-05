import { useTasks } from "../context/TaskContext";
import { useNavigate } from "react-router-dom";

function TaskCard({ task }) {
  const { deleteTask, toggleTaskDone } = useTasks();
  const navigate = useNavigate();
  const handleDone = async () => {
    await toggleTaskDone(task.id);
  };
  return (
    <div className="bg-zinc-700 text-white rounded-md p-4">
      <div className="flex justify-between items-center">
        <h2 className="text-sm font-bold">{task.title}</h2>
        <span>{task.done == 1 ? "✔️" : "❌"}</span>
      </div>
      <p className="text-xs">{task.description}</p>
      <p>{task.createAt}</p>
      <div className="flex gap-1 justify-end">
        <button
          className="bg-red-500 px-2 py-1 text-white font-bold rounded-sm"
          onClick={() => deleteTask(task.id)}
        >
          Eliminar
        </button>
        {/*Siempre usar `` cuando pasare parametros por navegacion dom*/}
        <button className="bg-slate-800 px-2 py-1 text-white font-bold rounded-sm" onClick={() => navigate(`edit/${task.id}`)}>Editar</button>
        <button className="bg-green-600 px-2 py-1 text-white font-bold rounded-sm" onClick={() => handleDone()}>Toggle Task</button>
      </div>
    </div>
  );
}

export default TaskCard;
