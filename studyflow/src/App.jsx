import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import StatCard from "./components/StatCard";
import TaskItem from "./components/TaskItem";

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");

    if (savedTasks) {
      return JSON.parse(savedTasks);
    }

    return [
      {
        id: 1,
        text: "Fazer exercícios de SQL",
        completed: false,
      },
      {
        id: 2,
        text: "Estudar React",
        completed: true,
      },
      {
        id: 3,
        text: "Revisar Matemática",
        completed: false,
      },
    ];
  });

 
  const [newTask, setNewTask] = useState("");
   useEffect(() => {
    localStorage.setItem(
      "tasks",
      JSON.stringify(tasks)
    );
  }, [tasks]);

  function addTask() {
    if (newTask.trim() === "") return;

    const task = {
      id: Date.now(),
      text: newTask,
      completed: false,
    };

    setTasks([...tasks, task]);
    setNewTask("");
  }

  function toggleTask(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  }

  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  const completedTasks = tasks.filter(
    (task) => task.completed
  ).length;

  const pendingTasks = tasks.length - completedTasks;

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Navbar />

      <main className="max-w-5xl mx-auto p-6">
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <StatCard
            title="Total de tarefas"
            value={tasks.length}
          />

          <StatCard
            title="Concluídas"
            value={completedTasks}
          />

          <StatCard
            title="Pendentes"
            value={pendingTasks}
          />
        </div>

        <div className="bg-slate-800 rounded-xl p-6 mb-6">
          <h2 className="text-2xl font-bold mb-4">
            Nova Tarefa
          </h2>

          <div className="flex gap-3">
            <input
              type="text"
              placeholder="Digite uma tarefa..."
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              className="flex-1 p-3 rounded-lg bg-slate-700 outline-none"
            />

            <button
              onClick={addTask}
              className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Adicionar
            </button>
          </div>
        </div>

        <div className="bg-slate-800 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4">
            Minhas Tarefas
          </h2>

          <div className="space-y-3">
            {tasks.map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                onToggle={toggleTask}
                onDelete={deleteTask}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;