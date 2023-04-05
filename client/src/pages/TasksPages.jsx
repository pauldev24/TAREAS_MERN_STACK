import { useEffect, useState } from "react";
import TaskCard from "../components/TaskCard";
import { useTasks } from "../context/TaskContext";
useTasks;

function TasksPages() {
  const { tasks, loadTasks } = useTasks();

  useEffect(() => {
    loadTasks();
  }, []);
  function renderMain() {
    if (tasks.length == 0) return <h1>No hay tareas</h1>;
    return tasks.map((task) => <TaskCard task={task} key={task.id} />);
  }
  return (
    <div>
      <h1 className="text-5xl text-white text-cen
       font-bold">Tareas</h1>
      <div className="grid grid-cols-3 gap-2">{renderMain()}</div>
    </div>
  );
}

export default TasksPages;
